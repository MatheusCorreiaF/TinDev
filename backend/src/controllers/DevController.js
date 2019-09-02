const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res)
    {
        const { username } = req.body;//no corpo da requisição, estou buscando pela informação 'username'

        const usuarioExists = await Dev.findOne({user: username});

        if(usuarioExists)
        {
            return res.json('{usuario: já existe}');
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);//response recebe os dados buscadosna API 
        
        const { name, bio, avatar_url: avatar } = response.data;

        const usuario = {
            name, 
            user: username, 
            bio, 
            avatar
        }

        const dev = await Dev.create(usuario)

        return res.json(dev);
    }
}