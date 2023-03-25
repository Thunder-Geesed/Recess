const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');

router.post('/', userController.addUser, (req, res) => {
  return res.sendStatus(200);
});

router.use(express.static(path.resolve(__dirname, '../../dist')));

module.exports = router;
