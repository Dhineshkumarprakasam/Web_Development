const http = require("http");
const fs = require("fs");
const url = require("url");

//get file name from url : http://localhost:3000?filename=dhinesh.txt

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    
    //get file name
    filename = url.parse(req.url,true).query.filename;
    
    //write content in file
    let content = "hello everyone";
    fs.writeFile(filename,content,(err)=>{
        if(err){
            console.log("Error : "+err);
        }
        else{
            console.log("Success");
        }
    });

    //read file content and count no.of words
    fs.readFile(filename,"utf-8",(err,data)=>{
        if(err){
            console.log("Error :"+err);
        }
        else{
            let output =``;
            output+=data+"<br>";
            output+="Count : "+data.split(" ").length;
            res.write(output);
        }
    });

    
}).listen(3000,()=>{
    console.log("Server running at http://localhost:3000?filename=dhinesh.txt");
});
