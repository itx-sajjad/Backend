// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.write("hello world! 123");
//     res.end()
// })
// server.listen(4000)

//multiple routes 

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("hello for server")
        res.end()
    }
    else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write("<form action ='/submit' method ='post'><input name='data'><button>submit</button></form>");
        res.end()
    }
    else if (req.url === "/submit") {
        res.write('recived')
        res.end()
    }
    else {
        res.write("404-not found")
        res.end()
    }
})
server.listen(4000)
