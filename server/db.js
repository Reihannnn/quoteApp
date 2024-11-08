const Pool = require("pg");

const db = new Pool.Client({
  user : "postgres",
  password : "gurita123456",
  host : "localhost",
  database : "todoApp",
  port : 5432 
})

module.exports = db