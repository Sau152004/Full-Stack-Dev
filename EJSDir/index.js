const express = require("express");
const app = express();
const path =require("path"); // to render the file from any where 
const port = 8080;

// app.use(express.static("public"));
    app.use(express.static(path.join(__dirname,"public")));

app.set("views",path.join(__dirname,"/views"));  // to render the file from  any where 

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);

    app.set("view engine","ejs");
   
    
    app.get("/",(req,res)=>{
        res.send("this is home");
        res.render("home.ejs");
        
    });
    

    app.get("/hello",(req,res)=>{
        res.send("hello");
    });

    // rollDice

    app.get("/roolDice",(req, res)=>{
        let num= Math.floor(Math.random()*6)+1;
        res.render("rollDice.ejs",{diceval: num});
    });

    // instagram

    app.get("/ig/:username",(req, res)=>{
        let{username}=req.params;
        res.render("instagram.ejs",{username});
    });

    // instagram page with ejs

    // app.get("/ig/:username",(req,res)=>{
    //     let{username}=req.params;
    //     const instaData=require("./data.json");
    //     const data = instaData[username];
    //     console.log(data);
    //     res.render("instagram.ejs",{data});
    // });
    app.get("/ig",(req, res)=>{
        // let{username}=req.params;
        res.write("<h1>hello instagram</h1>");
    })

});