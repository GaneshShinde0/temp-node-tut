const http = require('http');

const server=http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end("Here is our short history")
    }
    console.log(req)
    res.write('Welcome to our home page')
    res.end(`
    <h1> Error !!!!!!!!!! </h1>
    <p> we can't seem to find the page you are looking for </p>
    <a href='/'> Back Home </a>
    `)
})

server.listen(5000)