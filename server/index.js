import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/home/vchamale/Documents/Redux/bootcamp-project/server//index.html')
});

app.listen(5000, ()=>{
    console.log("Servidor escuchando en puerto 5000");
});

