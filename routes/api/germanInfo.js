const express = require('express');
const router = express.Router();
const germanCtrl = require('../../controllers/germanInfo');

/*---------- Public Routes ----------*/
router.get('/chancellor', germanCtrl.chancellor);
router.get('/seed', germanCtrl.createChancellor);

/*---------- Protected Routes ----------*/


module.exports = router;