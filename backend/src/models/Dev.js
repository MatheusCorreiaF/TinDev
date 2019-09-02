const { Schema, model } = require('mongoose');

const DevSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        bio: String,
        avatar: {
            type: String,
            required: true,
        },
        likes: [{
            type: Schema.Types.ObjectId,//o tipo de dado q sera armazenado(_id, do Mongo)
            ref: 'Dev',//_id esse da tabela Dev
        }],
        dislikes: [{
            type: Schema.Types.ObjectId,//o tipo de dado q sera armazenado(_id, do Mongo)
            ref: 'Dev',//_id esse da tabela Dev
        }],
    },
    {
        timestamps: true,//permite a criação automática de coluna com dataCriacao e dataAtualizacao
    });

module.exports = model('Dev', DevSchema);