const db = require('../models/teammateModels');
const bcrypt = require('bcryptjs');

const userController = {
  addUser(req, res, next) {
    try {
      const { username } = req.body;
      const { email } = req.body;
      let { password } = req.body;
      const { location } = req.body;

      if (username == undefined || email == undefined || password == undefined || location == undefined) {
        return next({
          log: 'userController: ERROR: Missing required fields',
          status: '400',
          message: {
            err: 'Error occured in userController.addUser Missing required fields',
          },
        });
      }

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return next(err);
        password = hash;
        const queryString = `INSERT INTO users (username, password, email, location) VALUES ('${username}', '${password}', '${email}', '${location}') RETURNING username, password, email, location, user_id;`;
        db.query(queryString).then((data) => {
          res.locals.newUser = data.rows[0];
          res.locals.userId = data.rows[0].user_id;
          return next();
        });
      });
    } catch (err) {
      return next({
        log: `userController.addUser: ERROR ${err}`,
        message: {
          err: 'userController.addUser: ERROR: User not created',
        },
      });
    }
  },

  verifyUser(req, res, next) {
    const { username } = req.body;
    let { password } = req.body;
    if (username === undefined || password === undefined) {
      return next({
        log: `userController.verifyUser: ERROR ${err}`,
        message: {
          err: 'userController.verifyUser: ERROR: missing username or password.',
        },
      });
    }

    const queryString = `
    SELECT user_id, username, password FROM users WHERE username = '${username}';
    `;
    db.query(queryString).then((result) => {
      if (result.rows.length !== 0) {
        res.locals.userId = result.rows[0].user_id;
        res.locals.username = result.rows[0].username;
        bcrypt.compare(password, result.rows[0].password).then((result) => {
          if (!result) {
            return next({
              log: `userController.verifyUser: ERROR`,
              message: {
                err: 'userController.verifyUser: ERROR: Incorrect Name or Password',
              },
            });
          } else {
            next();
          }
        });
      } else {
        return next({
          log: `userController.verifyUser: ERROR`,
          message: {
            err: 'userController.verifyUser: ERROR: Incorrect Name or Password',
          },
        });
      }
    });
  },
};

module.exports = userController;
