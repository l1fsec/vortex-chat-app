const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

//refer to the dotenv file.
const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

//register the routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);
//Connect mongoose + create server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running (${PORT})`);
    });
  })

  //catch errors if something goes bad
  .catch((err) => {
    console.log("Database connection failed, server was not started!");
    console.error(err);
  });
