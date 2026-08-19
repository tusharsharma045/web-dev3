const server = http.createServer((req,res)=>{

    if (req.method === 'GET'){
        
        res.write('<h1>Hello World</h1>')
            res.end();
        }
    else if (req.method === 'POST'){
        res.write('<h1>Hello World</h1>')
            res.end();
    }
});

ser