const { info } = require('console');
const express = require('express');
const app = express();
const server = require('http').Server(app);

//connection
const io = require('socket.io') (server);
//We'll store our online users here
let onlineUsers = {};
let channels = {"General": []};
io.on("connection", (socket) => {
  require('./sockets/chat.js') (io, socket, onlineUsers, channels);
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

//listen to connection
server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})
//app.js
