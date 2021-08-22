const mongoose = require("mongoose");

const germanySchema = new mongoose.Schema({
    chancellor: {},
    president: {},
    states: [],
    parties: [],
});

module.exports = mongoose.model("Germany", germanySchema);
