const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/monsters');
const loggedIn = require('../../config/logged');

// /*---------- Public Routes ----------*/

router.get('/', monstersCtrl.index);
// GET ONE /api/monsters
router.get('/:id', loggedIn, monstersCtrl.getOne);
// UPDATE /api/monsters
router.put('/:id', loggedIn, monstersCtrl.editMonster);

router.post('/', loggedIn, monstersCtrl.create);
// GET /api/monsters
// DELTE /api/monsters
router.delete('/:id', monstersCtrl.delete);
/*---------- Protected Routes ----------*/




module.exports = router;