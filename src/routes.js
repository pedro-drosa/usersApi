const express = require('express');
const userController = require('./controllers/userController');
const routes = express.Router();

routes.get('/users',userController.store);

module.exports = routes;