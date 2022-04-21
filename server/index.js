/*import express from 'express';
import { listen } from 'express/lib/application.js';

const app = express();

//app.get("/", (req, res)=>res.send('<h1>Hola mundo</h1>'));

app.listen(500, ()=>{
    console.log("Servidor escuchando en puerto 5000");
});
*/
import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>hola mundo</1>");
    res.end();
});

server.listen(5000, ()=> {
    console.log("servidor escuchando");
});
