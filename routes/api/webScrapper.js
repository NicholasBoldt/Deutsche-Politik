const express = require('express');
const router = express.Router();
const germanCtrl = require('../../controllers/germanScraper');

/*---------- Public Routes ----------*/
router.get('/chancellor', germanCtrl.scrapChancellor);

/*---------- Protected Routes ----------*/


module.exports = router;