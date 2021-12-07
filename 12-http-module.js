const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('History about us')
    }
    res.end(`
        <h1> We can't seem to find the page</h1>
        <a href="/">back home</a>
    `)
    //console.log(req);
    // res.write('Welcome to Home Page')
    // res.end()
})

server.listen(5000)