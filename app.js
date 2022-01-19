const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const server = require("http").Server(app);
const PORT = process.env.PORT || 3000;
const io = require("socket.io")(server);
const bodyParser = require("body-parser");

// Store only users
let onlineUsers = {};
let channels = { General: [] };

io.on("connection", (socket) => {
  require("./sockets/chat.js")(io, socket, onlineUsers, channels);
});
//express handlebars setup
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use public
app.use("/public", express.static("public"));
//path to index.hbs
app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "Vortex",
    style: "index.css",
  });
});
app.use("/auth", require("./routes/auth"));
//listen to connection
server.listen(PORT, () => {
  console.log("Server listening on Port 3000");
  
});

