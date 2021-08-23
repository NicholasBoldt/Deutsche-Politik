const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

router.get('/seeddata', apiCtrl.seeddata)
router.get('/scrapdata', apiCtrl.scrapdata)

module.exports = router;