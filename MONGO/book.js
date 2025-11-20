// book.js   VALIDATION Schema example

const mongoose = require('mongoose'); //importing mongoose

main() // connecting to database
     .then(() =>{
        console.log('Connected to MongoDB successfully');
     })
       .catch(err => console.log(err));

    async function main() {// async function to connect to database
   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const   BookSchema = new mongoose.Schema({   //schema creation
    title:{
        type : String,
        required : true
    } ,
    author: {
        type : String,
    },
    price:{
        type : Number,
    },
});


const Book = mongoose.model('Book', BookSchema);  //model creation

// Insert One

let book1 = new Book({   // document creation
    title: 'The Great Gatsby',  
    author: 'F. Scott Fitzgerald',
    price: 10.99,
});

book1.save().then((res) => {   // saving document to collection
    console.log('Book saved successfully:', res);
}).catch(err => {
    console.log(err);
});


// VALIDATION EXAMPLE

let book2 = new Book({   // document creation   
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99,
});

book2.save().then((res) => {   // saving document to collection
    console.log('Book saved successfully:', res);
}).catch(err => {
    console.log(err);
});

// what is validation in mongoose?

// Validation in Mongoose is a feature that allows you to define rules and constraints for the data being stored in your MongoDB database. When you create a schema in Mongoose, you can specify various validation criteria for each field, such as data type, required fields, minimum and maximum values, string length, custom validation functions, and more.

// When you attempt to save a document to the database, Mongoose automatically checks the data against the defined validation rules. If the data does not meet the specified criteria, Mongoose will throw a validation error and prevent the document from being saved. This helps ensure data integrity and consistency within your database.


