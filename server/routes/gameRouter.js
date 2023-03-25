const express = require('express');
const router = express.Router();
const path = require('path');
const gameController = require('../controllers/gameController.js');

router.post('/creategame', gameController.addGame, (req, res) => {
  return res.sendStatus(200);
});

router.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = router;
