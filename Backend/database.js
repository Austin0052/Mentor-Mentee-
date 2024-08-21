const mysql = require('mysql2');

// MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    console.error(err.stack); // Optional: Log error stack for debugging
    throw err; // Ensures the application fails on connection error
  }
  console.log("Connected to SQL database");
});

module.exports = db;
