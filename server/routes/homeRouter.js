const express = require('express');
const router = express.Router();
const path = require('path');
const gameController = require('../controllers/gameController.js');
const gameRouter = require('./gameRouter');

router.get('/gameplayers/', gameController.findUsersInGame, (req, res) => {
  return res.status(200).json(res.locals.usersAddedToGame);
});

router.get('/games', gameController.getGames, (req, res) => {
  return res.json(res.locals.games);
});

router.post('/joingame', gameController.addUserToGame, (req, res) => {
  return res.sendStatus(200);
});

router.delete('/leavegame', gameController.leaveGame, (req, res) => {
  return res.sendStatus(204);
});

router.use('/creategame', gameRouter);

router.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = router;
