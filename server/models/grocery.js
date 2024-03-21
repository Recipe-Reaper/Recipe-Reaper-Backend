const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    foodName: String,
    expirationDate: Date
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;