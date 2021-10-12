const mysql = require("promise-mysql");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({host:"localhost",user:"root",database:"to-do",password:"",reconnect:true,});

const getConnection = () => (connection.catch((err,conn)=>{
    console.log(err);
    return conn;
}));

module.exports = {
    getConnection
}