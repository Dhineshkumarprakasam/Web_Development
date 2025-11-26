const events = require("events");
const fs = require("fs");
const em = new events.EventEmitter();

em.on('myevent1',(data1,data2)=>{
    console.log(data1);
    console.log(data2);
});

em.on("myevent2",(data3)=>{
    console.log(data3);
})

em.addListener("myevent3",function(data4){
    console.log(data4)
})

em.emit("myevent1","This is data 1", "This is data 2");
em.emit("myevent2","This is data 3");
em.emit("myevent3","This is data 4");


//file event
let rs = fs.createReadStream("./dhinesh.txt");
rs.on('open',()=>{
    console.log("file opened");
});
