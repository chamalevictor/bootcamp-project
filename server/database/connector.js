const mongoose = require('mongoose');


const username = 'admin_mongo';
const password = 'Admin123.';
const ip = '192.168.1.54';
const db_name = 'bootcamp-project';
const connectorString = 'mongodb+srv://admin_mongo:'+password+'@cluster0.7a7p3.mongodb.net/'+db_name+'?retryWrites=true&w=majority';

mongoose.connect(connectorString);