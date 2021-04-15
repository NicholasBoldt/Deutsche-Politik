const express = require('express');
const router = express.Router();
const germanCtrl = require('../../controllers/germanInfo');

/*---------- Public Routes ----------*/
router.get('/chancellor', germanCtrl.chancellor);

/*---------- Protected Routes ----------*/


module.exports = router;