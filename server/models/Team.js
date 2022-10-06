const { Schema, model } = require('mongoose');
const ObjectId = require('mongodb').ObjectId
const profileSchema = require('./Profile')

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    squadSize: {
        type: Number,
        required: true,
    },
    game: {
        type: String,
        required: true,
    },
    deviceType: {
        type: String,
        required: true,
    },
    skill:{
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    squadMembers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
});

const Team = model('Team', teamSchema);


module.exports = Team;

