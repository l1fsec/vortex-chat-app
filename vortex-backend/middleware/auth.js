const jwt = require("jsonwebtoken"); 

const config = process.env; //take token key from .env

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"]; //verify token token

  if (!token) {
    return res.status(403).send("A token is required for authententication"); //if there is no token send 403 
  }
  try {
    token = token.replace(/^User\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid token"); 
  }
  return next();
};

module.exports = verifyToken;
