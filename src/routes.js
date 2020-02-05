const express = require('express');
const checkToken = require('./middleware/CheckToken')

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const PermitionController = require('./controllers/PermitionController');

const routes = express.Router();

routes.get('/users', checkToken, UserController.index);
routes.post('/users', checkToken, UserController.store);
routes.post('/users/login', AuthController.login);
routes.post('/permitions', checkToken, PermitionController.store);

module.exports = routes;