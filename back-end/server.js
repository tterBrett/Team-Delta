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
app.use(express.urlencoded({
    extended: true
})); // URL parser to read parameters passed
app.use(express.json()); // Parses incoming JSON payloads

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true

})

// get routes
app.get("/", (req, res) => {
    res.send("hello world");
})

// example
app.get("/api/tables/:table", (req, res) => {
    let i = 1
    selectClause = ""
    groupByClause = "GROUP BY "
    tables = {
        "MSE": ["brand"],
        "KeyB": ["brand"],
        "USB": ["name", "connector"],
        "Audio": ["name", "cable_type"],
        "PowerSupply": ["name", "device_type"],
        "Visuals": ["name", "cable_type"],
        "Switches": ["brand", "name"],
        "FireWall": ["brand", "name"],

    }
    query = "SELECT distinct "
    if (Object.keys(tables).includes(req.params.table)) {
        for (const x of (tables[`${req.params.table}`])) {
            if (i == 1) {
                selectClause += x
                groupByClause += x
            } else {
                selectClause += "," + x
                groupByClause += "," + x
            }
            i++;
        }
        selectClause += ", count(unique_ID) as quantity"
        sql = query + selectClause + ` FROM inventory.${req.params.table} WHERE not checked_out ${groupByClause};`

        connection.query(`${sql}`, (err, rows, fields) => {
            console.log(err)
            res.json(rows)
        });
    } else if (["Ethernet"].includes(req.params.table)) {

        connection.query(`
        select distinct 
		    CASE 
             WHEN
                 is_Long = 0 THEN 'Short'
             ELSE 
                 'Long' 
	     END AS CableLength,
		    count(unique_ID) as quantity
        from Inventory.${req.params.table}
        where not checked_out
        group by is_Long;`,

            (err, rows, fields) => {
                res.json(rows)
            });
    } else {
        res.send("Table does not exist");
    }

    // res.send(`Loading table ${req.params.table}`);

})

// https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql
app.post('/api/checkout', async (req, res) => {

    const query = util.promisify(connection.query).bind(connection);

    let i = 1
    let whereClause = ""

    let action = true ? req.body.action == 'in' : false
    console.log("Wheres: ", req.body.wheres)
    if (req.body.table == 'Ethernet') {
        if (req.body.wheres.is_Long == 'Long') {
            req.body.wheres.is_Long = 1;
        } else {
            req.body.wheres.is_Long = 0;
        }
    }

    for (const [key, value] of Object.entries(req.body.wheres)) {
        if (i == 1) {
            whereClause = `WHERE ${key} = '${value}' `
        } else {
            whereClause += `AND ${key} = '${value}'`
        }
        i++;
    }

    const sql = `SELECT unique_ID FROM inventory.${req.body.table} ${whereClause} AND checked_Out = ${action} LIMIT 1;`;
    console.log("selection", sql);
    (async () => {
        try {
            const rows = await query(sql);
            const quantity = true;
            if (rows.length > 0) {
                let updateQuery = `UPDATE inventory.${req.body.table} SET checked_Out = ${!action} ${whereClause} AND unique_ID = '${rows[0]['unique_ID']}'`
                const updatedStatus = await query(updateQuery)
                if (updatedStatus['changedRows'] == 1) {
                    res.json({
                        success: true
                    });
                    console.log("transaction was succesful")
                } else {
                    res.json({
                        success: false,
                        errMessage: "The transaction did not sucessfully go through. Please try again."
                    });
                    console.log("The transaction did not sucessfully go through. Please try again.")
                }
            } else {
                res.json({
                    success: false,
                    errMessage: "Unable to process transaction. Insufficient quantity for this action. Please try again."
                });
                console.log("Unable to process transaction. Insufficient quantity for this action.")
            }

        } catch (err) {
            res.json({
                success: false,
                errMessage: "The transaction did not sucessfully go through. Please try again."
            });
            console.log("ERROR\n", err)
        }
    })()

})
// localhost:3000/api/addItem
app.post('/api/addItem', async (req, res) => {
    console.log("endpoint hit")
    const query = util.promisify(connection.query).bind(connection);

    let i = 1
    let whereClause = ""
    let insertClause = ""

    if (req.body.table == 'Ethernet') {
        if (req.body.wheres.is_Long == 'Long') {
            req.body.wheres.is_Long = 1;
        } else {
            req.body.wheres.is_Long = 0;
        }
    }

    for (const [key, value] of Object.entries(req.body.wheres)) {

        // if(i == 1){
        //     whereClause = `WHERE ${key} = '${value}' ` 
        //     insertClause = `'${value}'`
        // }else{
        //     whereClause += `AND ${key} = '${value}'`
        //     insertClause += `,'${value}'`
        // }

        if (i == 1) {
            whereClause = `WHERE ${key} = '${value}' `
            //Do not put the value in quotes if it is a value instead of string 
            insertClause = key === 'is_Long' ? `${value}` : `'${value}'`
        } else {
            whereClause += `AND ${key} = '${value}'`
            insertClause += key === 'is_Long' ? `,${value}` : `,'${value}'`
        }
        i = i + 1;
    }

    const sql = `SELECT MAX(unique_ID) FROM inventory.${req.body.table}`;
    console.log("selection", sql);

    (async () => {
        try {
            const rows = await query(sql);
            if (rows.length > 0) {
                // INSERT INTO MSE VALUES ('0011', 'Dell', 0); 
                console.log(rows);
                newId = parseFloat(rows[0]['MAX(unique_ID)']) + 1
                insertClause = `(${newId}, ${insertClause}, 0)`
                let insertQuery = `INSERT INTO inventory.${req.body.table} VALUES ${insertClause}`
                console.log("insert statement:", insertQuery)
                const insertStatus = await query(insertQuery)
                if (insertStatus['affectedRows'] == 1) {
                    res.json({
                        success: true
                    });
                    console.log("transaction was succesful")
                } else {
                    res.json({
                        success: false,
                        errMessage: "The transaction did not sucessfully go through. Please try again."
                    });
                    console.log("The transaction did not sucessfully go through. Please try again.")
                }
            } else {
                res.json({
                    success: false,
                    errMessage: "Unable to process transaction. Insuffecient quantiy for this action."
                });
                console.log("Unable to process transaction. Insuffecient quantiy for this action.")
            }

        } catch (err) {
            res.json({
                success: false,
                errMessage: "The transaction did not sucessfully go through. Please try again."
            });
            console.log("ERROR\n", err)
        }
    })()
})

app.post('/api/deleteItem', async (req, res) => {
    console.log("endpoint hit")
    const query = util.promisify(connection.query).bind(connection);

    let i = 1
    let whereClause = ""
    // let insertClause = ""

    if (req.body.table == 'Ethernet') {
        if (req.body.wheres.is_Long == 'Long') {
            req.body.wheres.is_Long = 1;
        } else {
            req.body.wheres.is_Long = 0;
        }
    }

    for (const [key, value] of Object.entries(req.body.wheres)) {
        if (i == 1) {
            whereClause = `WHERE ${key} = '${value}' `
            // insertClause = `'${value}'`
        } else {
            whereClause += `AND ${key} = '${value}'`
            // insertClause += `,'${value}'`
        }
        i = i + 1;
    }

    const sql = `SELECT MAX(unique_ID) FROM inventory.${req.body.table} ${whereClause} AND checked_Out = 0 LIMIT 1;`;
    console.log("selection", sql);

    (async () => {
        try {
            const rows = await query(sql);
            if (rows.length > 0) {
                console.log(rows);
                let deleteQuery = `DELETE FROM inventory.${req.body.table} ${whereClause} AND checked_Out = 0 ORDER BY unique_ID DESC LIMIT 1`
                console.log("delete statement:", deleteQuery)
                const deleteStatus = await query(deleteQuery)
                if (deleteStatus['affectedRows'] == 1) {
                    res.json({
                        success: true
                    });
                    console.log("transaction was succesful")
                } else {
                    res.json({
                        success: false,
                        errMessage: "The transaction did not sucessfully go through. Please try again."
                    });
                    console.log("The transaction did not sucessfully go through. Please try again.")
                }
            } else {
                res.json({
                    success: false,
                    errMessage: "Unable to process transaction. Insufficient quantity for this action. Please try again."
                });
                console.log("Unable to process transaction. Insufficient quantity for this action.")
            }


        } catch (err) {
            res.json({
                success: false,
                errMessage: "The transaction did not sucessfully go through. Please try again."
            });
            console.log("ERROR\n", err)
        }
    })()
})


app.get("/api/home", (req, res) => {
    res.send("this is the body. you made it home");
})

app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
})