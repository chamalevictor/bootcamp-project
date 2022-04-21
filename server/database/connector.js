const { append } = require('express/lib/response');

/*import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true},
    edad: {type: Number, required: true},
    dpi: {type: Number, required: true}
});

export const Producto = mongoose.model("producto", productSchema);
export const all = () => Producto.find({});
*/
const username = 'admin_mongo';
const password = 'Admin123.';
const ip = '192.168.1.54';
const db_name = 'bootcamp-project';
const connectorString = 'mongodb+srv://admin_mongo:'+password+'@cluster0.7a7p3.mongodb.net/'+db_name+'?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(connectorString)
.then(client => {
    console.log('Connected to '+ db_name);
    const db = client.db(db_name);
    const testCollection = db.collection('test');

    app.use(/**/);
    app.get(/**/);
    app.post('/', (req,res) => {
        res.send(console.log("entramos a quotes"));
        /*
        testCollection.insertOne({nombre: "prueba1", 
        edad: 55, 
        dpi: 5555555})
        .then(result =>{
            console.log(result);
        })*/
    });
    app.listen(/**/);
})
.catch(console.error);

