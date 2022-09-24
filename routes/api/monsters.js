const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/monsters');

// /*---------- Public Routes ----------*/
router.post('/', monstersCtrl.create);
// GET /api/monsters
router.get('/', monstersCtrl.index);

/*---------- Protected Routes ----------*/




module.exports = router;