const express = require('express');
const DevController = require('./controllers/DevController');
const routes = express.Router();

routes.post('/devs', DevController.store);//ao acessar a rota '/devs', sera disparado o método Store() do DevController

module.exports = routes;