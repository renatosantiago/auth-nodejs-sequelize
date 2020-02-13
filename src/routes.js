const express = require('express');
const checkToken = require('./middleware/CheckToken')

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const PermissionController = require('./controllers/PermissionController');

const routes = express.Router();

routes.get('/users', checkToken, UserController.index);
routes.post('/users', checkToken, UserController.store);
routes.post('/users/login', AuthController.login);
routes.post('/permissions', checkToken, PermissionController.store);

module.exports = routes;