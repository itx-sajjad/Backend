// const express = require("express");
// const path = require("path")
// const router = express.Router();
// const filepath = path.join(__dirname, '..', 'views');
// router.get('/', (req, res) => {
//     res.sendFile('index.html', { root: filepath })
// })
// router.post('/submit', (req, res) => {
//     console.log(req.body);
//     res.send("data received")

// })
// module.exports = router;



const express = require("express");
const router = express(express.Router);
const path = require("path");
const filepath = path.join(__dirname, '..', 'views')
router.get('/', (req, res) => {
    res.render(filepath, { user: req.query.name || 'test user' })
})
router.post('/submit', (req, res) => {
    console.log(req.body);
    res.send("Data Received!")
})
module.exports = router;