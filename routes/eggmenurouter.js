const express = require('express');
const router = express.Router();
const eggmenucontroller = require('../controllers/eggmenucontroller');

router.get('/',eggmenucontroller.index);

module.exports = router ;