const mysql = require("promise-mysql");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({host:process.env.DB_SERVER,user:process.env.DB_USER,database:process.env.DB_DB,password:process.env.DB_PASS,reconnect:true,});

const getConnection = () => (connection.catch((err,conn)=>{
    console.log(err);
    return conn;
}));

module.exports = {
    getConnection
}