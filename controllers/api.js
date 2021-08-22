const Germany = require("../models/germany");
const webscraper = require('../webscraping/germanscraper');

async function scrapdata(req, res) {
  try {
    const data = await webscraper();
    const germany = new Germany(data);
    germany.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
    scrapdata
  };
    