const express = require('express');
const router = express.Router();
const path = require('path');
const gameController = require('../controllers/gameController.js');
// const gameRouter = require('./gameRouter');

router.get(
  '/gameplayers/:gameId',
  gameController.findUsersInGame,
  (req, res) => {
    return res.status(200).json(res.locals.usersAddedToGame);
  }
);

router.get('/games', gameController.getGames, (req, res) => {
  return res.json(res.locals.games);
});

router.post('/joingame/:gameId', gameController.addUserToGame, (req, res) => {
  return res.status(200).json(res.locals.added);
});

router.delete('/leavegame/:gameId', gameController.leaveGame, (req, res) => {
  return res.status(200).json(res.locals.deleted);
});

router.post(
  '/creategame',
  gameController.addGame,
  gameController.addUserToGame,
  (req, res) => {
    return res.status(200).json(res.locals.newGame);
  }
);

router.delete('/deletegame', gameController.deleteGame, (req, res) => {
  return res.status(200).json(res.locals.deleted);
});

router.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = router;
