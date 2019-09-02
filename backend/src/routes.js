const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const routes = express.Router();

routes.post('/devs', DevController.store);//ao acessar a rota '/devs', sera disparado o método Store() do DevController
routes.post('/devs/:targetDev/likes', LikeController.store);//ao acessar a rota , sera disparado o método Store() do LikeController

module.exports = routes;