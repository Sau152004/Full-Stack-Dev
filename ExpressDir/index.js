const express = require("express");
const app = express();
// console.dir(app);  use for printing app methods or functions(all methods of app)

// let port = 3000;
let port = 8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
    // console.log(req);
//     console.log("request recieved");
    // res.send("this is the basic response");
    // we can also send respose in form of object
    // res.send({
    //     name: "apple",
    //     color: "red",
    //   });

    //   we can also send a html express.response
    // res.send("<h1>Fruits</h1> <ul><li>apple</li> <li>Orange</li> </ul>");

    // or 

    // let code = "<h1>Fruits</h1> <ul><li>Apple</li> <li>Orange</li> </ul>";
    // res.send(code);
// });


    // ============================  routing ===========================

    // app.get("/", (req, res)=>{
        // res.send("you conacted to root path");
        // res.send("hello i am root path")
        // this for nodemon sever (above line)
    // });

    // app.get("/apple", (req, res)=>{
    //     res.send("you conacted to apple path");
        
    // });

    // app.get("/orange", (req, res)=>{
    //     res.send("you conacted to orange path");
    // });


    // custoum 
    // app.get("*", (req, res)=>{
    //     res.send("this path does not exit");
    // });


    // similary we send a post express.request

    // app.post("/", (req, res)=>{
    //     res.send("you send a post request");
    // });


    


    // ==========================  Path parameters ========================

    app.get("/:username/:id",(req, res)=>{
        // console.log(req.params);
        let{username, id }= req.params;
        res.send(`welcome to the page of @${username}.`);


        // we can also make html and other object like abve.

//   let code = "<h1>Fruits <ul><li<Orange</li> <li>apple</li></ul> </h1>";
//   res.send(code);
    });
