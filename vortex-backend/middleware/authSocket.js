const jwt = require("jsonwebtoken");

const config = process.env;

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token; //token is coming from socket handshake if there is a token

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY); //decode token and validate from config
    socket.user = decoded;
  } catch (err) {
    const socketError = new Error("NOT_AUTHORIZED"); //if the token is not valid, put out error.
    return next(socketError);
  }

  next();
};

module.exports = verifyTokenSocket;
