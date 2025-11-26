const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Hello world");
}).listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});
