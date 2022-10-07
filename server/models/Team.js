const { Schema, model } = require('mongoose');

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
        ref: 'Profile',
        required: true
    },
    squadMembers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
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

