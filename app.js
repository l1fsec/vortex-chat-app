//app.js
const express = require('express');
const app = express();
// define usage of socket.io with http 
const server = require('http').Server(app);

//socket.io 
const io = require('socket.io') (server);
io.on("connection", (socket) => {
  console.log("User connected");
})

// express handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//search for public folder
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen(process.env.PORT || 3000, () => {
  console.log('Listening to ' + process.env.PORT );
})