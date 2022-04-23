//"Importing" http package.
const http = require('http');

//Importing express app.
const app = require('./app');

//Trying to get port via env var 'env.port' or hardcode  it to 5000.
const port = process.env.PORT || 5000; 

//Creating the actual server using the express app as request handler.
const server = http.createServer(app);

//Make it listen to the port.
server.listen(port, ()=>{
    console.log('Listening on port 5000');
});