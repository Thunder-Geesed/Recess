const express = require('express');
const router = express.Router();
const path = require('path');
const gameController = require('../controllers/gameController.js');

router.post('/', gameController.addGame, gameController.addUserToGame, (req, res) => {
  return res.json(res.locals.newGame);
});

router.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = router;
