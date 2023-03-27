const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');
// const gameController = require('./controllers/gameController.js');

const gameRouter = require('./routes/gameRouter.js');
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/home', cookieController.checkCookie, homeRouter);

app.use('/createuser', userRouter);

app.use('/game', gameRouter);

app.post(
  '/login',
  userController.verifyUser,
  cookieController.createCookie,
  (req, res) => {
    return res.sendStatus(200);
  }
);

app.use((req, res) => res.status(404).send('Page not found.'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
