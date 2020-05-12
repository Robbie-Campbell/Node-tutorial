const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if(req.url === "/")
    {   
        fs.readFile(path.join(__dirname, "index.html"), (err, data) =>{
            res.write("<h1> hello there user </h1>");
            res.write(data);
            res.end();
        });

    }
    if (req.url ==="/user")
    {
        res.write("whattup simp");
        res.end();
    }
})

server.listen(3000, ()=>{
    console.log("Server is up and running");
})