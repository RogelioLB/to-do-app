const mysql = require("promise-mysql");

const connection = mysql.createConnection({host:"remotemysql.com",user:"giciBiLN9I",database:"giciBiLN9I",password:"zx3r94ZBOV",reconnect:true});

const getConnection = () => (connection);

module.exports = {
    getConnection
}