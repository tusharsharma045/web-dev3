const http = require("http") //when client and server communicate, http module is used.

const server = http.createServer((req,res)=>{

    // res.write("<h1>Hello World</h1>")
    // res.end()

//     if(req.url ==="/"){
//         res.write("<h1>Home Page</h1>")
//         res.end()
//     }   

//     console.log(req.url)
//     res.end()

    // console.log(req.method)
    

    if (req.method === "GET"){
        res.write("<h1>GET Request</h1>")
        res.end()
    }

    if(req.method === "POST"){
        res.write("<h1>POST Request</h1>")
        res.end()
    }

    if(req.method === "PUT"){
        res.write("<h1>PUT Request</h1>")
        res.end()
    }

    if(req.method === "DELETE"){
        res.write("<h1>DELETE Request</h1>")
        res.end()
    }
    


})




server.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})