const { AuthenticationError } = require('apollo-server-express');
const { Profile, Team } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    teams: async () => {
      return Team.find();
    }
  },

  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    addTeam: async (parent, {name, squadSize, game, deviceType, skill}, context) => {
      if (context.user) {
        const owner = await Profile.findOne({ _id: context.user._id });
        const team = await Team.create({
          name,
          squadSize,
          game,
          deviceType,
          skill,
          owner: owner,
          squadMembers: [owner]
        });

        return team;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editTags: async (parent, {xboxUsername, psnUsername, steamUsername, nintendoUsername}, context) => {
      if(context.user){
        const updatedUser = await Profile.findOneAndUpdate({_id: context.user._id}, {
          xboxUsername,
          psnUsername,
          steamUsername,
          nintendoUsername,
        });

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
