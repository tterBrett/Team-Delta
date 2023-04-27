require('dotenv').config(); // Required to load dotenv values

const express = require("express")
const app = express()
const mysql = require('mysql') // Required to connect to mysql
const cors = require('cors')

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
    password: DB_PASSWORD
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

app.post('/api/checkout', (req, res) => {
   console.log(req.body.sub)
    // connection.query(
    //     `UPDATE Inventory.${req.body.main}
    //     SET checked_Out = '1'
    //     WHERE checked_Out = 0;`
    // , (error, results) => {
    //     if (error) {
    //         console.error(error)
    //         res.status(500).send('Error updating data in database');
    //     } else {
    //         res.status(200).send('Data updated in database');
    //     }
    // });
  });
  

app.get("/api/home", (req, res) => {
    res.send("this is the body. you made it home");
})

app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
})
