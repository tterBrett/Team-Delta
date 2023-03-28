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
    else{
        connection.query(`
            select distinct brand, name, count(unique_ID) as quantity
            from Inventory.${req.params.table}
            where not checked_out
            group by brand, name;`,
        (err, rows, fields) => {
            // console.log(err);
            res.json(rows)
        });
    }
    
    // res.send(`Loading table ${req.params.table}`);

})

app.get("/api/home", (req, res) => {
    res.send("this is the body. you made it home");
})

app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
})

