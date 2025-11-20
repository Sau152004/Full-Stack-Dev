const mongoose = require('mongoose'); //importing mongoose

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main() // connecting to database
     .then(() =>{
        console.log('Connected to MongoDB successfully');
     })
       .catch(err => console.log(err));

    async function main() {// async function to connect to database
   await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const   userName = new mongoose.Schema({   //schema creation
    name: String,
    email: String,
    age: Number,
});


const User = mongoose.model('User', userName);  //model creation

// Insert One

const user1 = new User({   // document creation
    name: 'Sachin Yadav',
    email: 'sachin.yadav@example.com',
    age: 30,
});

const   user2 = new User({   // document creation
    name: 'Anita Sharma',
    email: 'anita.sharma@example.com',
    age: 25,
}); 
    

// user1.save().then((res) => {   // saving document to collection
//     console.log('User saved successfully:', res);
// }).catch(err => {
//     console.log(err);
// });

// user2.save().then((res) => {   // saving document to collection
//     console.log('User saved successfully:', res);
// }).catch(err => {
//     console.log(err);
// });


// Insert Many


// Insert Many


// User.insertMany([
//     {name: "ansh", email: "ansh@gmail.com", age: 15},
//     {name: "arpit", email: "arpit@gmail.com", age: 14},
//     {name: "ankur", email: "ankur@gmail.com", age: 12},

// ]).then((data)=>{
//     console.log(data);
// })


// Find All Documents

//   User.find().then((data)=>{
//          console.log(data);
//   })   .catch((err)=>{
//         console.log(err);
//   });

// Find Documents with Condition

// User.find({age: {$gt: 18}}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// Find One Document

// User.findOne({name: 'Sachin Yadav'}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });

// Find Document by ID

// User.findById('691eef80e41a8f44ce187067').then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// Update One Document

// User.updateOne({name: 'Sachin Yadav'},{age: 31}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// Update Many Documents

// User.updateMany({age: {$lt: 18}},{age: 18}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// FindAndUpdate

// 1. findOneAndUpdate

// User.findOneAndUpdate({name: 'Anita Sharma'},{age: 66},{new: true}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });

// 2. findByIdAndUpdate


// User.findByIdAndUpdate('691eef80e41a8f44ce187067',{age: 32},{new: true}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// Delete One Document

// 1. deleteOne

// User.deleteOne({name: 'Anita Sharma'}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });

// Delete Many Documents
// 2. deleteMany

// User.deleteMany({age: {$lt: 20}}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });


// FindAndDelete

// 1. findOneAndDelete

// User.findOneAndDelete({name: 'Sachin Yadav'}).then((data)=>{
//     console.log(data);
// })   .catch((err)=>{
//     console.log(err);
// });

// 2. findByIdAndDelete

User.findByIdAndDelete('691eeefbfff91f7176ec27f5').then((data)=>{
    console.log(data);
})   .catch((err)=>{
    console.log(err);
});
