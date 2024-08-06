const express = require('express')
const app = express()

const connection = require('./connection/database')
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.set('view engine', 'ejs')

app.get('/', (raq, res) => {
  res.render('index')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});