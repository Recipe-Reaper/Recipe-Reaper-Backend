const mongoose = require("mongoose");

const viewGroceries = function (req, res) {
    console.log(req.body.foodName);
    console.log(req.body.expirationDate);
}

module.exports = {viewGroceries}