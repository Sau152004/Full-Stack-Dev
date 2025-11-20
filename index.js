const express = require('express'); // Import the Express framework
const app = express();  // Create an instance of an Express application
const port = 8080;  // Port number for the server

const path = require('path'); // Node.js module for handling file paths
const methodOverride = require('method-override'); // Import method-override to support PUT and DELETE methods


const {v4 : uuidv4} = require('uuid'); // Import the UUID library for generating unique IDs
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(methodOverride('_method')); // Use method-override middleware
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.set('view engine', 'ejs'); // Set EJS as the templating engine

app.set("views", path.join(__dirname, 'views')); // Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

let posts = [ // In-memory array to store posts
    {
      id: uuidv4(),
        username : "saurabh",
        content : "keeplaring keep growing",
    },
    {
      id: uuidv4(),
        username : "sachin", 
        content : "never give up",
    },
    { 
      id: uuidv4(),
        username : "gaurav", 
        content : "stay positive",
    },
    
]; 

// Route for the home page
app.get('/', (req, res) => {
  res.render("index.ejs",{posts}); // Render the 'home' EJS template
});

app.get("/posts/new", (req, res)=>{
  res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
  let {username, content}= req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  // res.send("post request is workng");
  res.redirect("/posts");  // all pages ko redirect krega
});

// Add this new route
app.get("/posts", (req, res)=>{
  res.render("index.ejs", {posts});
});

app.get("/posts/:id", (req, res)=>{
  let {id} = req.params;
  let post = posts.find((p) => p.id == id);
  console.log(post);
  // res.send("request to show specific post");
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res)=>{
  let {id} = req.params;
  let newContent = req.body.content; // Get the updated content from the request body
  let post = posts.find((p) => id === p.id);
  post.content = newContent; // Update the post content
  console.log(post);
  res.redirect("/posts"); // Redirect to the posts list after updating
});

app.get("/posts/:id/edit", (req, res)=>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
});

// Delete route

app.delete("/posts/:id", (req, res)=>{
  let {id} = req.params; // Extract the post ID from the URL parameters
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts"); // Redirect to the posts list after deletion
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});