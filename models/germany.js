const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    name: String,
    inital: String,
    leader: String,
    ideology: String,
    seats: String,
    group: String,
    position: String,
});

const stateSchema = new mongoose.Schema({
    name: String,
    capital: String,
    desc: String,
    flag: String,
    leader: String,
    government: String,
    iso: String,
});

const leaderSchema = new mongoose.Schema({
    name: String,
    party: String,
    desc: String,
    incumbant_desc: String,
    link: String,
    img: String,
});

const germanySchema = new mongoose.Schema({
    chancellor: leaderSchema,
    president: leaderSchema,
    states: [stateSchema],
    parties: [partySchema],
});

module.exports = mongoose.model("Germany", germanySchema);
