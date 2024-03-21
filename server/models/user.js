const mongoose = require("mongoose");
const passportMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String
});

userSchema.plugin(passportMongoose);
const User = mongoose.model('User', userSchema);

module.exports = User;