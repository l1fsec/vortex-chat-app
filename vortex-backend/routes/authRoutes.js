const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
  //object form
  username: Joi.string().min(3).max(12).required(), //username must be min 3 max 15
  password: Joi.string().min(6).max(12).required(), //passowrd must be min 6 max 12
  mail: Joi.string().email().required(), //needs mail address
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(), //exact same as register username, wouldnt make sense if otherwise
  mail: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister //calls for validator and authControllers and postRegister for validation
);
router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
  // calls for postLogin for validation
);

// test route to verify if our middleware is working
// router.get("/test", auth, (req, res) => {
// res.send("request passed");
//});

module.exports = router;
