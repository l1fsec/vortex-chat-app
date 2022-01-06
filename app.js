//app.js
const express = require('express');
const app = express();
// define usage of socket.io with http 
const server = require('http').Server(app);

// express handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen(process.env.PORT || 3000, () => {
  console.log('Listening to ' + process.env.PORT );
})