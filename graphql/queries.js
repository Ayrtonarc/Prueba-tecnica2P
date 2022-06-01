const { GraphQLList } = require("graphql");
const { UserType } = require("./typedefs");
const { User } = require('../models');

const users = {
    type: new GraphQLList(UserType),
     async resolve(){
      const users = await User.find();
    
      console.log(users)

      return users;
    }
};

module.exports = { users }