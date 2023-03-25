const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');
const gameController = require('./controllers/gameController.js');

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/games', (req, res) => {
  return res.sendStatus(200);
});

app.get('/gameplayers/', (req, res) => {
  return res.sendStatus(200);
});

app.post('/login', cookieController.createCookie, (req, res) => {
  return res.sendStatus(200);
});

app.post('/createuser', userController.addUser, (req, res) => {
  return res.sendStatus(200);
});

app.post('/creategame', gameController.addGame, gameController.addUserToGame, (req, res) => {
  return res.sendStatus(200);
});

app.post('/joingame', gameController.addUserToGame, (req, res) => {
  return res.sendStatus(200);
});

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
