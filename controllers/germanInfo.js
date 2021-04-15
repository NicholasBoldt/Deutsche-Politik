const Chancellor = require("../models/chancellor");

async function chancellor() {
  try {
    const chancellor = await Chancellor.find();
    res.status(200).json(chancellor);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  chancellor
}