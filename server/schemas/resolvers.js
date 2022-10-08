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
        const me = await Profile.findOne({ _id: context.user._id });
        return me;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    teams: async () => {
      return Team.find();
    },
    myTeam: async (parent, args, context) => {
      if(context.user){
        const loggedInUser = await Profile.findOne({_id: context.user._id})
        const myTeam = await Team.findOne({_id: loggedInUser.currentTeam._id});
        return myTeam;
      }
      throw new AuthenticationError('You need to be logged in!');
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
        // const owner = await Profile.findById(context.user._id);
        // console.log(owner, '--------------------------------60')
        console.log(context.user)

        const team = await Team.create({
          name,
          squadSize,
          game,
          deviceType,
          skill,
          owner: context.user,
          squadMembers: [context.user]
        });

        await Profile.findOneAndUpdate({_id: context.user._id}, {currentTeam: team});

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
    },
    joinTeam: async (parent, {teamId}, context) => {
      if(context.user){
        const profile = await Profile.findOne({_id: context.user._id});
        const team = await Team.findOneAndUpdate({_id: teamId}, {
          $push: {squadMembers: profile}
        });

        await Profile.findOneAndUpdate({_id: context.user._id}, {currentTeam: team});

        return team;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
