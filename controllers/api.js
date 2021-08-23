const Germany = require("../models/germany");
const webscraper = require('../webscraping/germanscraper');

async function seeddata(req, res) {
    try {
      const germany = await Germany.findOne();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

async function scrapdata(req, res) {
  try {
    const data = await webscraper();
    const germany = await Germany.findOneAndUpdate(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
    scrapdata,
    seeddata
  };
    