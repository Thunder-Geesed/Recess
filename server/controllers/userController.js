const db = require('../models/teammateModels');

const userController = {
  addUser(req, res, next) {
    try {
      const { username } = req.body;
      const { email } = req.body;
      const { password } = req.body;
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

      const queryString = `INSERT INTO users (username, password, email, location) VALUES ('${username}', '${password}', '${email}', '${location}');`;

      db.query(queryString).then((data) => {
        res.locals.newUser = data;
        return next();
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
