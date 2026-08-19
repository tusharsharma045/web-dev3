const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello World</h1>')
    res.end();

    if (req.url==='about'){
        res.write('<h1>hellow about<h1>')
        res.end();
    }
})