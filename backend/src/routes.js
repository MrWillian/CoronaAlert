const express = require('express');
const routes = express.Router();

const userController = require('../src/controllers/UserController');

routes.post('/api/user', userController.store);

routes.post('/api/login', userController.login);

module.exports = routes;
