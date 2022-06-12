const jwt = require("jsonwebtoken");

const config = process.env; //take token key from .env

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"]; //verify token

  if (!token) {
    return res.status(403).send("A token is required for authentication"); //if there is no token send 403 forbidden
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
    //send 401 unauthorized
  }

  return next();
};

module.exports = verifyToken;
