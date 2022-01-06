//app.js
const { info } = require('console');
const express = require('express');
const app = express();
//http socket.io server setup
const server = require('http').Server(app);

//socket.io setup and connection
const io = require('socket.io') (server);
io.on("connection", (socket) => {
    console.log("User connected " + Date.now());
})
io.on("connection", (socket) => {
  require('./sockets/chat.js') (io, socket);
})
//express handlebars setup
const { engine }  = require('express-handlebars');
app.engine('hbs', engine({
extname: "hbs",
defaultLayout: false  //overrided to false
})
);
app.set('view engine', 'hbs');
//use public 
app.use('/public', express.static('public'))
//path to index.hbs
app.get('/', (req, res) => {
  res.render('index.hbs');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})