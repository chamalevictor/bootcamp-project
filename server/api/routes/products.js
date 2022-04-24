//Product-related routes.
const express = require('express');
const mongoose = require('mongoose');

//Creating our router.
const router = express.Router();

//Importing Product Schema.
const Product = require('../models/products');

//get() is the method that will handle incoming 'GET' requests.
router.get('/',(req, res, next) => {
        Product.find()
        .exec()
        .then(docs =>{
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
    });

router.post('/',(req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        img: req.body.img,
        model: req.body.model,
        height: req.body.height,
        large1: req.body.large1,
        depth: req.body.depth,
        description: req.body.description,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));    
    res.status(201).json({
        message: 'Algo mas',
        createdProduct: product
    })
});


module.exports = router;