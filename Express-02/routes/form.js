//process.cwd()	terminal ka current folder

// const express = require("express");
// const path = require("path")
// const filepath = path.join(process.cwd(), 'view', 'form.html');
// const router = express.Router();
// router.get('/', (req, res) => {
//     res.sendFile(filepath);
// });
// router.post("/submit", (req, res) => {
//     const data = req.body;
//     console.log(data);
//     res.send("data receive");
// })
// module.exports = router;

//__dirname	current file ka folder

const express = require("express");
const path = require("path");
const router = express.Router();
// const filepath = path.join(__dirname, '..', 'view')

router.get('/', (req, res) => {
    res.render('form', { user: req.query.name || "test user" });
});

router.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("data receive");
});

module.exports = router;