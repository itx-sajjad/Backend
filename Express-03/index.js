const express = require("express");
const app = express();
app.use((req, res, next) => {
    res.send('hello')

})
app.listen(4000, () => {
    console.log('server for running 4000');

})