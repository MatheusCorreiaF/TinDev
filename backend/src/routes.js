const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/dislikeController');
const routes = express.Router();

routes.get('/devs', DevController.index);//ao acessar a rota '/devs', sera disparado o método index() do DevController
routes.post('/devs', DevController.store);//ao acessar a rota '/devs', sera disparado o método Store() do DevController
routes.post('/devs/:targetDev/likes', LikeController.store);//ao acessar a rota , sera disparado o método Store() do LikeController
routes.post('/devs/:targetDev/dislikes', DislikeController.store);//ao acessar a rota , sera disparado o método Store() do DislikeController

module.exports = routes;