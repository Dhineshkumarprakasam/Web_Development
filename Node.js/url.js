const http = require("http");
const url = require("url");

let adr = "http://localhost:3000/hello.html?name=dhinesh&age=20"
let u = url.parse(adr,true);
console.log("Port : "+u.port);
console.log("Hostname : "+u.hostname);
console.log("Name : "+u.query.name);
console.log("Age : "+u.query.age);
