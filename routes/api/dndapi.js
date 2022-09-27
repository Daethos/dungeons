const express = require('express');
const router = express.Router();
const dndCtrl = require('../../controllers/dndapi')

router.get('/', dndCtrl.index);

module.exports = router;