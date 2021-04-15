const Chancellor = require("../models/chancellor");

async function chancellor(req, res) {
  try {
    const chancellor = await Chancellor.findOne();
    res.status(200).json(chancellor);
  } catch (err) {
    res.status(400).json(err);
  }
};

async function createChancellor(req, res) {
    const chancellor = new Chancellor({
        name: "Test",
        party: "DTP"
    });
    try {
      await chancellor.save();
      res.status(200);
    } catch (err) {
      res.status(400).json(err);
    }
};


module.exports = {
  chancellor,
  createChancellor,
}