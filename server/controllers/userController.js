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
          log: 'teammateController: ERROR: Missing required fields',
          status: '400',
          message: {
            err: 'Error occured in teammateController.addUser Missing required fields',
          },
        });
      }

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return next(err);
        password = hash;
        const queryString = `INSERT INTO users (username, password, email, location) VALUES ('${username}', '${password}', '${email}', '${location}') RETURNING username, password, email, location, user_id;`;
        db.query(queryString).then((data) => {
          console.log(data);
          res.locals.newUser = data.rows[0];
          res.locals.userId = data.rows[0].user_id;
          return next();
        });
      });
    } catch (err) {
      return next({
        log: `teammateController.addUser: ERROR ${err}`,
        message: {
          err: 'teammateController.addUser: ERROR: User not created',
        },
      });
    }
  },

  verifyUser(req, res, next) {
    const { username } = req.body;
    let { password } = req.body;
    if (!username || !password) {
      return next({
        log: `teammateController.verifyUser: ERROR ${err}`,
        message: {
          err: 'teammateController.verifyUser: ERROR: missing username or password.',
        },
      });
    }

    const queryString = `
    SELECT user_id, password FROM users WHERE username = '${username}';
    `;
    db.query(queryString).then((result) => {
      res.locals.userId = result.rows[0].user_id;
      bcrypt.compare(password, result.rows[0].password).then((result) => {
        if (!result) {
          res.redirect('/signup');
        } else {
          next();
        }
      });
    });
  },
};

module.exports = userController;

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
