const express = require('express');

const UsersListController = require('./controllers/UsersListController');
const UserDetailsController = require('./controllers/UserDetailsController');
const UserRepositoriesController = require('./controllers/UserRepositoriesController');

const routes = express.Router();

const usersListController = new UsersListController();
const userDetailsController = new UserDetailsController();
const userRepositoriesController = new UserRepositoriesController();

routes.get('/api/users', usersListController.index);
routes.get('/api/users/:username/details', userDetailsController.index);
routes.get('/api/users/:username/repos', userRepositoriesController.index);

module.exports = routes;
