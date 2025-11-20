const express = require('express');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker'); 
const app = express();
const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));



// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'FULLSTACKDEV',
  password: 'Saurabh@2004'
});

// let q = "SHOW TABLES";  // better way of using queries

// insert data
// let q = "INSERT INTO user ( id , username, email,password) VALUES(?,?,?,?)";
// let user = [123, "saurabhyadav", "ysaurbah@gmail.com", "saur@3892"];



// fake data large me chaheye to array bha 


let  getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
   
];
}


// inserting  fake data
// let q = "INSERT INTO user ( id , username, email,password) VALUES ?";

// let data = [];
// for(let i = 1; i<=100; i++){
//   data.push(getRandomUser());  // 100 random user
// }



// try{
//     connection.query(q, [data],(err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);  // to print the length of array  ie 2
//     // console.log(result[0]);    // to print the arrays individal object at index2
//     // console.log(result[1]);   
//     connection.end();
      
//     });

// }catch(err){
//   console.error(err);
// }

// HOme route
app.get("/", (req, res) => {
  let q = "SELECT  COUNT(*) FROM user";
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      // res.send(`Total users in database: ${results[0]['count(*)']}`);
      let count = result[0]['count(*)'];
      res.render("home.ejs", { count: count });
    });
  }
  catch(err){
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});



// Show Route

app.get("/user", (req, res)=>{
  let q = 'SELECT * FROM user';
 try{
    connection.query(q, (err, users) => {
      if (err) throw err;
      // let data = users;
      // console.log(data);
      res.render("showuser.ejs", {users});
    });
  }
  catch(err){
    res.send("some error occured");
  }
});

// Edit Route

app.get("/user/:id/edit", (req, res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;    
  try{
    connection.query(q, (err, users) => {
      if (err) throw err;
      let user = users[0];
      // console.log(user); 
      res.render("edit.ejs", {user});
    });
  }catch(err){
    console.log(err)
    res.send("some error occured in DB");
  }
});

//Update Route

app.patch("/user/:id",(req, res)=>{
let {id} = req.params;
let {password: FormPass, username: NewUsername } = req.body;
let q = `SELECT * FROM user WHERE id = '${id}'`;    
  try{
    connection.query(q, (err, users) => {
      if (err) throw err;
      let user = users[0];
      if(FormPass != user.password){
        res.send("WRONG PASSWORD");
      }else{
        let q2 = `UPDATE user SET username = '${NewUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.log(err)
    res.send("some error occured in DB");
  }
});


app.listen(8080, () => {
  console.log("Server started on port 8080");
});




// Function to generate a random user object
// function getRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
   
//   };
// }

// console.log(getRandomUser())