const mongoose = require('mongoose');

//use model userSchema to save into DB
const userSchema = new mongoose.Schema({
    mail: { type: String, unique: true },
    username: {type: String},
    password: { type: String},
});

module.exports = mongoose.model("user", userSchema);