// const express = require("express")
// const app = express();
// const path = require("path")
// app.use(express.urlencoded({ extended: true }))
// const form = require("./routes/form")
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//     console.log("hello");

//     next();
// })
// app.use('/form', form)
// app.listen(4000, () => {
//     console.log("server for running 4000")
// })


const express = require("express");
const app = express();
const form = require("./routes/form")
const path = require("path")
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    console.log('hello');
    next();
})
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'))
app.use('/form', form)
app.listen(4000, () => {
    console.log("server for running 4000!");

})