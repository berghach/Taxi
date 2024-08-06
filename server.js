const express = require('express')
const mysql = require('mysql2');
require('dotenv').config();
const app = express()

const port = process.env.PORT || 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.set('view engine', 'ejs')

app.get('/', (raq, res) => {
    console.log('here')
    res.render('index', { text: 'World'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(port)