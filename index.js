const express = require('express');
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json())

app.get("/",(req,res) =>{
    res.send("Hello from Node API");
});

app.get("/api/products", async (req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({message: error.message});
    }
})

app.post("/api/products", async(req,res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});


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













