/*
Create the following e-commerce product's objects from a JSON string
and Print the output in the table format:
productid, name, category, price, currency, inStock : 
These are basic key-value pairs representing fundamental product information

availabicColors: Ihis is a JSON array, storing a list of strings
representing the different color options.

specifications: This is a nested JSON object. grouping related
technical details about the product.

reviews: Tliis is a JSON array. where each element is another JSON 
object representing an individual customer review, 
including details like reviewerName, rating, comment, and date. 
The date field uses ISO 8601 format for easy parsing and sorting.
*/

const http = require("http");

let data = `
[
    {
        "productid": 100,
        "name": "Phone",
        "category": "Electronic",
        "price": 20000,
        "currency": "INR",
        "inStock": true,
        "availableColors": ["Black", "Blue"],
        "specifications": {
            "brand": "Xiaomi",
            "model": "Note 13",
            "ram": "8GB",
            "storage": "128GB"
        },
        "reviews": [
            {
                "reviewerName": "Arun",
                "rating": 4.5,
                "comment": "Very good phone!",
                "date": "2025-01-20T10:30:00Z"
            }
        ]
    },

    {
        "productid": 101,
        "name": "Laptop",
        "category": "Electronic",
        "price": 55000,
        "currency": "INR",
        "inStock": false,
        "availableColors": ["Silver", "Grey"],
        "specifications": {
            "brand": "Dell",
            "model": "Inspiron 3511",
            "ram": "16GB",
            "storage": "512GB SSD"
        },
        "reviews": [
            {
                "reviewerName": "Sita",
                "rating": 4.0,
                "comment": "Good for students",
                "date": "2025-02-01T14:50:00Z"
            }
        ]
    }
]
`;

let products = JSON.parse(data);

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    let output = `
        <table border="1" cellpadding="10">
            <tr>
                <td>Product Id</td>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Currency</td>
                <td>InStock</td>
                <td>AvailableColors</td>
                <td>Spcifications</td>
                <td>Reviews</td>
            </tr> 
    `

    for(let i=0;i<products.length;i++){
        let spec = ``;
        for(let j in products[i].specifications)
            spec+=`${j}:${products[i].specifications[j]}<br>`;

        let rev = "";
        let reviews = products[i].reviews;

        for (let j = 0; j < reviews.length; j++) {
            rev += `name: ${reviews[j].reviewerName}<br>`;
            rev += `rating: ${reviews[j].rating}<br>`;
            rev += `comment: ${reviews[j].comment}<br><br>`;
        }

        output+=`
            <tr>
                <td>${products[i].productid}</td>
                <td>${products[i].name}</td>
                <td>${products[i].category}</td>
                <td>${products[i].price}</td>
                <td>${products[i].currency}</td>
                <td>${products[i].inStock}</td>
                <td>${products[i].availableColors}</td>
                <td>${spec}</td>
                <td>${rev}</td>
        `;
    }

    output+=`</table>`
    res.write(output);
}).listen(3000);
