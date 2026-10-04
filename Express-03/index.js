const express = require("express");
const todo = require('./routes/route')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/todo', todo)
app.listen(4000, () => {
    console.log('server for running 4000');

})