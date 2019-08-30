const express = require('express'); //importação do Express
const mongoose = require('mongoose');
const routes = require('./routes'); //importando o arquivos das rotas
const server = express(); //criando server Express

mongoose.connect('mongodb+srv://MCF_Redfield:redfield@cluster0-s0y1l.mongodb.net/redfield?retryWrites=true&w=majority',
{ useNewUrlParser: true });

server.use(express.json());
server.use(routes);
server.listen(3333); //porta que será usada