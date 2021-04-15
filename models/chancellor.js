const mongoose = require("mongoose");

var chancellorSchema = new mongoose.Schema({
    name: String,
    party: String,
});

module.exports = mongoose.model("Chancellor", chancellorSchema);
