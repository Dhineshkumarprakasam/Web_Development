/*
Employee data will be stored in mongodb
id, name, age, department

Get the department using a dropdown and display the employees belonging
to the selected department
*/

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/emp")
.then((msg)=>{
    console.log("Successfully connected");
})
.catch((err)=>{
    console.log(err);
});

const schema = new mongoose.Schema({
    name: String,
    dept : String,
    age: Number
});

const model = mongoose.model('emp',schema);


app.get('/',(req,res)=>{
    res.send(`
            <form action="/display" method="post">
                <select name="department">
                    <option value="it">IT</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                </select> 
                <input type="submit" value="Submit">
            </form>
        `);
});


app.post('/display',async(req,res)=>{
    let department = req.body.department;
    let data = await model.find({"dept":department});
    let output=`
        <table border='1' cellpadding="10">
            <tr>
                <td>Emp ID</td>
                <td>Name</td>
                <td>Department</td>
                <td>Age</td>
            </tr>
    `;

    for(let i=0;i<data.length;i++){
        output+=`<tr>
            <td>${data[i]._id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].dept}</td>
            <td>${data[i].age}</td>
        </tr>`
    }
    output+=`</table>`;
    res.send(output);
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
