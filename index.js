const express = require('express');
const app = express();
const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://test:321test321@cluster0.j5xjlrl.mongodb.net/firsttest?retryWrites=true&w=majority',() =>{
    console.log("MongoDB Successfully Connected"); //warning callback funtion doesn't support in updated version of mongoose
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("Running On Port 3000")
})


//test 
//321test321

//mongodb+srv://test:<password>@cluster0.j5xjlrl.mongodb.net/?retryWrites=true&w=majority