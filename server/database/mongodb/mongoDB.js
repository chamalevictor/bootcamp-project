import mongoose from 'mongoose';

const username = 'admin_mongo';
const password = 'Admin123.';
const ip = '192.168.1.54';
const db_name = 'bootcamp-project';
const collection_test = 'test';
const connector = 'mongodb+srv://admin_mongo:'+password+'@cluster0.7a7p3.mongodb.net/'+db_name+'?retryWrites=true&w=majority';

mongoose.connect(connector, () => {console.log("Connected to DataBase "+db_name)});