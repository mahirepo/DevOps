//const {MongoClient}= require('mongodb');
const express = require('express');
const app = express();

let db;
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/products", (req, res) => {
    //const products = db.collection("products").find().toArray;
    res.send("hello world products");
    //res.json(products);
});


const start =async ()=>{

    //const client = new MongoClient("mongodb://0.0.0.0:27017/shop");
    //await client.connect();
    //db = client.db();
    app.listen(3001, ()=>{
        console.log("server is running on port 3001");
    
    });

};

start();

