require('dotenv').config(); // Required to load dotenv values

const express = require("express")
const app = express()
const mysql = require('mysql') // Required to connect to mysql
const cors = require('cors')

// Database variables stored in .env file
const port = 3000;
const DB_PORT = process.env.PORT;
const DB_HOST = process.env.HOST;
const DB_USER = process.env.USER;
const DB_PASSWORD = process.env.PASSWORD;

//middleware 
app.use(cors()); // CORS = Cross-Origin Resource Sharing. Current statement allows all. Would need config for production env
app.unsubscribe(express.json()); // Removes email in package.json from mailing list
app.use(express.urlencoded( { extended: true })); // URL parser to read parameters passed
app.use(express.json()); // Parses incoming JSON payloads

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD
})

// get routes
app.get("/",  (req, res) => {
    res.send("hello world");
})

// example
app.get("/api/:table", (req, res) => {
    console.log("Fetching table:", req.params.table);
    
    connection.query(`SELECT * FROM inv.${req.params.table}`, (err, rows, fields) => {
        res.json(rows)
    })

})

app.listen(port, () => {
    console.log(`Server is starting on port: ${port}`);
})
