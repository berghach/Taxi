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
        res.render('users.index', { users: results});
      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Server error');
      } 
})

router
    .route("/:id")
    .get((req,res)=>{
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req,res)=>{
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req,res)=>{
        res.send(`Delete User With ID ${req.params.id}`)
    })
router.param("id",(req, res, next, id)=>{
    console.log(id)
    next()
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

module.exports = router