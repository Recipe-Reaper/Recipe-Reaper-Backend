const mongoose = require("mongoose");
const Grocery = mongoose.model("Grocery");
const User = mongoose.model("User");

const viewGroceries = function (req, res) {
    console.log(req.body.foodName);
    console.log(req.body.expirationDate);
}

const createGrocery = function (req, res) {
    if (req.body.user != "") {
        User.findOneAndUpdate(
            {username: req.body.user},
            {$push: {groceries : {
                foodName: req.body.foodName,
                expirationDate: req.body.expirationDate
            }}}).then((result) => {console.log(result)});
    }
    else {
        console.log("User not logged in.");
    }
}

module.exports = {viewGroceries, createGrocery}