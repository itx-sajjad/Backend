const express = require('express');
const { getTodos, addTodo } = require('../controllers/todo');
const router = express.Router();
router.get('/', (req, res) => {
    // res.send(getTodos());
    res.render("todo", { todo: getTodos() })
})
router.post('/add', (req, res) => {
    addTodo(req.body.data);
    res.send('todo added')
})
module.exports = router;