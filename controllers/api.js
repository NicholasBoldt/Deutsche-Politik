const Germany = require("../models/germany");
const webscraper = require('../webscraping/germanscraper');

async function seeddata(req, res) {
    try {
      const germany = await Germany.findOne();
      res.status(200).json(germany);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

async function scrapdata(req, res) {
  try {
    const data = await webscraper();
    console.log('test')
    console.log(data)
    await Germany.findOneAndUpdate({}, data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updatedata(req, res) {
  try {
    const data = await webscraper();
    console.log('test')
    console.log(data)
    await Germany.findOneAndUpdate({}, data);
  } catch (err) {
    console.log(err);
  }
}

updatedata();

module.exports = {
    scrapdata,
    seeddata
  };
    