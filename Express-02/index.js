const express = require("express");
const form = require("./routes/form");
const app = express();
const path = require("path");
const filepath = path.join(__dirname, 'public');
app.use(express.static(filepath))
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.data = "test";
    console.log(req.url);
    next();
})
// app.use((req, res, next) => {
//     console.log(req.data);
//     res.send("hello! 1");
// })
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/form', form)
app.listen(4000, () => {
    console.log("server for running");

})