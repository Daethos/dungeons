const express = require('express');
const router = express.Router();
const communityCtrl = require('../../controllers/community');
const loggedIn = require('../../config/logged');

// /*---------- Public Routes ----------*/

router.get('/', communityCtrl.index);

/*---------- Protected Routes ----------*/




module.exports = router;