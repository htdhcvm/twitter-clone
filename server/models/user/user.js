const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    login:  String,
    password: String,
    meta: {
      date: Date
    }
});

module.exports = mongoose.model('User', User);