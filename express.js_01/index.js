// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
//     res.send('hello for server!')
// })
// app.listen(4000)

// Terminal =npm init -y + cmd=npm i express +
//npm i nodemon --save-d +npm i express + node index.js



// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
//     // res.send('hello server!')
//     req.user = 'ali';
//     console.log(req.url);
//     next()
// })
// app.use((req, res, next) => {
//     console.log(req.user);

//     res.send('hello app')
// })
// app.listen(4000)



const express = require('express');
const form = express('./routes/form');
const app = express()
app.use((req, res, next) => {
    res.send('hello for server!')
    res.next()
})
app.use('/form', form)
app.listen(4000)