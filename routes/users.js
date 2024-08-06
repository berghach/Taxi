const express = require('express')
const router = express.Router()
const db = require('../connection/database')

router.get('/', async (req, res) => {
    try {
        const [results] = await db.promise().query(`
          SELECT users.*, roles.role_name FROM users 
          INNER JOIN roles ON users.role_id = roles.id 
          WHERE role_name = 'driver'
        `);
        res.render('index', { users: results });
      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Server error');
      } 
})

router
    .route("/:id")
    .get((req,res)=>{
        res.send()
    })
    .put((req,res)=>{
        res.send()
    })
    .delete((req,res)=>{
        res.send()
    })

router.get('/new', (req, res) => {
    res.send('User New Form')
})

module.exports = router