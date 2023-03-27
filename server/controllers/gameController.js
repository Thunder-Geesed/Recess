const db = require('../models/teammateModels');

const gameController = {
  addGame(req, res, next) {
    try {
      const { name } = req.body;
      const { type } = req.body;
      const { datetime } = req.body;
      const { location } = req.body;
      const { maxplayers } = req.body;
      if (name == undefined || type == undefined || datetime == undefined || location == undefined || maxplayers == undefined) {
        return next({
          log: 'gameController: ERROR: Missing required fields',
          status: '400',
          message: {
            err: 'Error occured in gameController.addGame Missing required fields',
          },
        });
      }

      const queryString = `INSERT INTO games (name, type, datetime, location, maxplayers) VALUES ('${name}', '${type}', '${datetime}', '${location}', '${maxplayers}') RETURNING name, type, datetime, location, maxplayers, game_id;`;

      db.query(queryString).then((data) => {
        res.locals.newGame = data.rows[0];
        res.locals.gameId = data.rows[0].game_id;
        return next();
      });
    } catch (err) {
      return next({
        log: `gameeController.addGame: ERROR ${err}`,
        message: {
          err: 'gameeController.addGame: ERROR: Game not created',
        },
      });
    }
  },

  addUserToGame(req, res, next) {
    try {
      const { userId } = req.cookies;
      let gameId;
      if (req.body.gameId) {
        gameId = req.body;
      } else {
        gameId = res.locals.gameId;
      }

      const queryString = `INSERT INTO users_games (user_id, game_id) VALUES ('${userId}', '${gameId}')`;
      db.query(queryString).then((data) => {
        res.locals.userAddedToGame = data;
        return next();
      });
    } catch (err) {
      return next({
        log: `gameController.addGame: ERROR ${err}`,
        message: {
          err: 'gameController.addGame: ERROR: Game not created',
        },
      });
    }
  },

  getGames(req, res, next) {
    try {
      const queryString = `SELECT * FROM games`;

      db.query(queryString).then((results) => {
        const gamesObj = {};
        results.rows.forEach((el) => {
          if (gamesObj[el.type]) {
            gamesObj[el.type].push(el);
          } else {
            gamesObj[el.type] = [el];
          }
        });
        console.log(gamesObj);
        res.locals.games = gamesObj;
        return next();
      });
    } catch (err) {
      return next({
        log: `gameController.getGames: ERROR ${err}`,
        message: {
          err: 'gameController.getGames: ERROR: Could not get games.',
        },
      });
    }
  },

  findUsersInGame(req, res, next) {
    try {
      const { gameId } = req.body;

      const queryString = `
      SELECT username FROM users INNER JOIN users_games ON users.user_id = users_games.user_id WHERE game_id = '${gameId}'`;
      db.query(queryString).then((data) => {
        const userList = [];
        data.rows.forEach((el) => {
          userList.push(el.username);
        });
        res.locals.usersAddedToGame = userList;
        return next();
      });
    } catch (err) {
      return next({
        log: `gameController.findUsersInGame: ERROR ${err}`,
        message: {
          err: 'gameController.findUsersInGame: ERROR: Game not found',
        },
      });
    }
  },
};

// SELECT username FROM users INNER JOIN users_games ON users.user_id = users_games.user_id WHERE game_id = '1';

module.exports = gameController;

// if (!deleted) {
//   return next({
//     log: 'StudentController.deleteStudent: ERROR: Student not found',
//     status: '400',
//     message: {
//       err: 'Error occured in StudentController.deleteStudent. Student not found.',
//     },
//   });
// }

// "INSERT INTO users (username, password, email, location) VALUES ('weston', '1234', 'abc@gmail.com', 'portalnd')";
