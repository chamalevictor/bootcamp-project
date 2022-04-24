const express = require('express');
const app = express();
const bodyParser = require('body-parser');
/*const mongoose = require('mongoose');
const connector = 'mongodb+srv://admin_mongo:Admin123.@cluster0.7a7p3.mongodb.net/bootcamp-project?retryWrites=true&w=majority';
mongoose.connect(connector);*/
const productRoutes = require('./api/routes/products');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin_mongo:Admin123.@cluster0.7a7p3.mongodb.net/bootcamp-project?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
  //client.close();
});

//Handling cors and parsing body.
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//All requests starting with '/products' will be handled by productRoutes.
app.post('/', (req, res, next) =>{
    res.send({
        data: 'hi there'
    });
});

app.use('/productos', productRoutes);
app.get('/',(res, req, next) =>{
    console.log("entramos");
});

module.exports = app;