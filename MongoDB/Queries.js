/* The tamilnadu educational department maintains 10th and 120' students
database 'students' in mongoDB. It has a collection Marks with the fields
regno. name, age. total and grade. Write thc MongoDB
shell queries for the following: */


/* a. Add 4 documents Irlonging to each student details */
db.student.insertMany([
    {"regno":100,"name":"dhinesh","age":20,"dob":"2005-09-18","grade":"S","total":490},
    {"regno":101,"name":"ram","age":19,"dob":"2005-09-18","grade":"A","total":465},
    {"regno":102,"name":"arun","age":20,"dob":"2005-09-18","grade":"D","total":290},
    {"regno":103,"name":"raj","age":18,"dob":"2005-09-18","grade":"B","total":400}
]);



/* b. List the students details which has the total more than 400 and less than 500 */
db.student.find({
    "total":{$gt:400,$lt:500}
});



/* c. The tamilnadu government wants to give the scholarship
amount Rs 10000 for district toppers( scored above 95%).
So, write the update query to implement this */
db.student.update(
    {"total":{$gt:475}},
    {$set:{"scholarship":10000}}
);


/* d. To find minimum and maximum total in the overall collection */
//minimum
db.student.find().sort({"total":1}).limit(1);

//maximum
db.student.find().sort({"total":-1}).limit(1);


/* e. List all the students details where name as 'raj' */
db.student.find({"name":'raj'});


/* f. List all the students details where name contains word 'raj' */
db.student.find({"name":/raj/});

