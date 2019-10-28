const express = require('express');
const userController = require('./controllers/userController');
const routes = express.Router();

routes.post('/users',userController.store);
routes.get('/users',userController.index);
routes.get('/users/:email',userController.show);
routes.put('/users',userController.update);
routes.delete('/users',userController.destroy);

module.exports = routes;