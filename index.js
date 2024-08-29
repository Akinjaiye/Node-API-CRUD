const express = require('express');
const app = express();



app.get("/",(req,res) =>{
    res.send("Hello from Node API")
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})

//Iw4kYyLXWviy2Lmc

//mongodb+srv://akindijijaiyejaiye:<db_password>@cluster0.mmvpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0













