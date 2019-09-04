const Dev = require('../models/Dev');

module.exports = {
   async store(req, res)
    {
        const { user } = req.headers;
        const { targetDev } = req.params;

        const devLogado = await Dev.findById(user); 
        const devTarget = await Dev.findById(targetDev); 

        if(!devTarget)
        {
            return res.status(400).json({erro: 'Usuário não existe'});
        }

        if(devTarget.likes.includes(devLogado._id))
        {
            console.log("DeuMatch!!!");
        }

        devLogado.likes.push(devTarget._id);
        await devLogado.save();

        return res.json(devLogado);
    }
};