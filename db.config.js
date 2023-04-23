const mysql = require("mysql2/promise");

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

async function connection() {
  return await mysql.createConnection(options);
}

exports.connection = connection;
