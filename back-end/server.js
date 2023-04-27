require('dotenv').config(); // Required to load dotenv values

const express = require("express")
const app = express()
const mysql = require('mysql') // Required to connect to mysql
const cors = require('cors')
const util = require('util');


// Database variables stored in .env file
const port = 3000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

//middleware 
app.use(cors()); // CORS = Cross-Origin Resource Sharing. Current statement allows all. Would need config for production env
app.unsubscribe(express.json()); // Removes email in package.json from mailing list
app.use(express.urlencoded( { extended: true })); // URL parser to read parameters passed
app.use(express.json()); // Parses incoming JSON payloads

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true

})

// get routes
app.get("/",  (req, res) => {
    res.send("hello world");
})

// example
app.get("/api/tables/:table", (req, res) => {
    console.log("Fetching table:", req.params.table);
    
    if(["MSE", "KeyB"].includes(req.params.table)){

        connection.query(`
            select distinct brand, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by brand;`,
        (err, rows, fields) => {
            res.json(rows)
        });
    }
    else if(["USB"].includes(req.params.table)){

        connection.query(`
            select distinct name, connector, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by name, connector;`,
        (err, rows, fields) => {
            res.json(rows)
        });
    }

    else if(["Audio"].includes(req.params.table)){
       
        connection.query(`
            select distinct name, cable_type, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by name, cable_type;`,
        
        (err, rows, fields) => {
            res.json(rows)
        });
    }

    else if(["Ethernet"].includes(req.params.table)){
       
        connection.query(`
        select distinct 
		    CASE 
		    WHEN is_Long = 0 THEN 'Short'
            ELSE 'Long' 
	        END AS CableLength,
		    count(unique_ID) as quantity
        from Inventory.${req.params.table}
        where not checked_out
        group by is_Long;`,
        
        (err, rows, fields) => {
            res.json(rows)
        });
    }

    else if(["PowerSupply"].includes(req.params.table)){
       
        connection.query(`
            select distinct name, device_type, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by name, device_type;`,
        
        (err, rows, fields) => {
            res.json(rows)
        });
    }

    else if(["Visuals"].includes(req.params.table)){
       
        connection.query(`
            select distinct name, cable_type, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by name, cable_type;`,
        
        (err, rows, fields) => {
            console.log(err);
            res.json(rows)
        });
    }    

    else if(["Transaction"].includes(req.params.table)){
       
        connection.query(`
        select distinct 
	        CASE 
            WHEN flow = 0 THEN 'Checked In' 
            ELSE 'Checked Out'
            END AS Flow, 
            timeStamp, name, itemID, tableOrigin    
        from Inventory.${req.params.table}
            group by name;`,
        
        (err, rows, fields) => {
            res.json(rows)
        });
    }    

    else{
        connection.query(`
            select distinct brand, name, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by brand, name;`,
        (err, rows, fields) => {
            console.log(err);
            res.json(rows)
        });
    }
    
    // res.send(`Loading table ${req.params.table}`);

})

// https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql
app.post('/api/checkout', async (req, res) => {

    const query = util.promisify(connection.query).bind(connection);

    let i = 1
    let whereClause = ""

    let action = true ? req.body.action == 'in' : false

    for (const [key, value] of Object.entries(req.body.wheres)) {
        if(i == 1){
            whereClause = `WHERE ${key} = '${value}' ` 
        }else{
            whereClause += `AND ${key} = '${value}'`
        }
        i++;
    }
    
    const sql = `SELECT unique_ID FROM inventory.${req.body.table} ${whereClause} AND checked_Out = ${action} LIMIT 1;`;
    console.log(sql);

    (async () => {
    try {
      const rows = await query(sql);

        console.log("product", rows[0]['unique_ID']);
        let updateQuery = `UPDATE inventory.${req.body.table} SET checked_Out = ${!action} ${whereClause} AND unique_ID = '${rows[0]['unique_ID']}'`
        console.log("UPDATE SQL", updateQuery)
        const updatedStatus = await query(updateQuery)
        console.log("WOOP WOOP", updatedStatus);
    } catch(err){
        console.log("ERROR\n", err)
    }
  })()

});

app.get("/api/home", (req, res) => {
    res.send("this is the body. you made it home");
})

app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
})
