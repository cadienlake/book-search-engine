const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    users: async () => {
      return User.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    // addSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate({ _id: profileId }, { $pull: { skills: skill } }, { new: true });
    // },
  },
};

module.exports = resolvers;
