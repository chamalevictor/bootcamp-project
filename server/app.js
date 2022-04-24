//importing express.
const express = require('express');

//Excecuting express.
const app = express();

///const bodyParser = require('body-parser');

//Importing products routes.
const productRoutes = require('./api/routes/products');

//Handling cors and parsing body.
//app.use(cors());
//app.use(bodyParser.json());

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