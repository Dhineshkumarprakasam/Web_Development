const http = require("http");
const qs = require("querystring");

let str = "name=dhinesh&age=20&gender=male"
let json = {
    name:"dhinesh",
    age:20,
    gender:"Male"
}

let str_to_json = qs.parse(str);
let json_to_str = qs.stringify(json);

console.log(str_to_json);
console.log(json_to_str);
