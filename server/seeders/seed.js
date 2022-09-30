const db = require('../config/connection');
const { Profile, Team } = require('../models');
const profiles = require('./profiles');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Team.deleteMany({})
    await Profile.create(profiles);


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
