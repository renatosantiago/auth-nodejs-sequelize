const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const PermitionController = require('./controllers/PermitionController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/login', AuthController.login);
routes.post('/permitions', PermitionController.store);

module.exports = routes;