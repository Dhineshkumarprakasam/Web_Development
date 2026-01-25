const http = require("http");
const mod = require("./date");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"html/text"});
    res.write("Date : "+mod.getToday()+"<br>");
    res.write("Day : "+mod.getMyDay()+"<br>");
    res.write("Month : "+mod.getMyMonth()+"<br>");
    res.write("Year : "+mod.getMyYear()+"<br>");
}).listen(3000);
