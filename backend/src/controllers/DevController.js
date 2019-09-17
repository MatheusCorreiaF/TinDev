const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res)
    {
        const { userName } = req.body;//no corpo da requisição, estou buscando pela informação 'userName'
        const usuarioExists = await Dev.findOne({user: userName});
        
        if(usuarioExists)
        {
            return res.json(usuarioExists);
        }

        const response = await axios.get(`https://api.github.com/users/${userName}`);//response recebe os dados buscadosna API 
        
        const { name, bio, avatar_url: avatar } = response.data;

        const usuario = {
            name, 
            user: userName, 
            bio, 
            avatar
        }

        const dev = await Dev.create(usuario)

        return res.json(dev);
    },

    async index(req, res)
    {
        const { user } = req.headers; //busco essa informação passada pelo HEADER
        const devLogado = await Dev.findById(user);
        const users = await Dev.find({
            $and: [     //$and para aplicar a busca de Users todos os filtros que serão definidos
                { _id: { $ne: devLogado._id } },// $ne == NOT EQUAL
                { _id: { $nin: devLogado.likes } },
                { _id: { $nin: devLogado.dislikes } },
            ],
        })
        return res.json(users);
    },
}