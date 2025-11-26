/*
Create a Node JS program with Express JS to do the following:
form for online book store and its default url tike locathost:port
page collects the details like user name, book name, author name,
publisher details( dropdown box). no of books want to buy. payment
mode (online. COD) through radio input and add a submit
next page receives all these input and finds the total cost of books you
want to purchase.
*/

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`
            <form action="/calculate" method="post">
                User Name : <input type="text" name="username"> <br><br>
                Book Name : <input type="text" name="bookname"> <br><br>
                Author Name : <input type="text" name="authorname"> <br><br>
                Publisher : 
                <select name="publisher">
                        <option value="DC Books">DC Books</option>
                        <option value="Roli Books">Roli Books</option>
                </select> <br><br>
                Number of Books : <input type="number" name="count"> <br><br>
                Payment : 
                <input type="radio" name="payment" value="online"> Online
                <input type="radio" name="payment" value="COD"> Cash on Delivery <br><br>

                <input type="submit" value="Submit">
            </form>
        `);
});


app.post('/calculate',(req,res)=>{
    let data = req.body;
    let output=``;

    output+=`Username : ${data.username}<br>`;
    output+=`Book Name : ${data.bookname}<br>`;
    output+=`Author Name : ${data.authorname}<br>`;
    output+=`Publisher : ${data.publisher}<br>`;
    output+=`Books count : ${data.count}<br>`;
    output+=`Payment : ${data.payment}<br>`;
    
    let price = 0;
    if(data.publisher == 'DC Books')
        price = 200*data.count;

    else
        price=100*data.count;

    if(data.payment=='COD')
        price+=19;
    
    output+=`Total Price : ${price}<br>`;

    res.send(output);
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
