const express = require('express');
const mongoose = require("mongoose");
const app = express();



app.get("/",(req,res) =>{
    res.send("Hello from Node API")
})


mongoose.connect("mongodb+srv://akindijijaiyejaiye:Iw4kYyLXWviy2Lmc@cluster0.mmvpe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connection failed");
})


app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})

//Iw4kYyLXWviy2Lmc

//mongodb+srv://akindijijaiyejaiye:<db_password>@cluster0.mmvpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0













