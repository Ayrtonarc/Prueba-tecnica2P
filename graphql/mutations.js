const { GraphQLString } = require("graphql");
const { User } = require("../models");
const {createJWTToken} = require('../util/auth')
require('../models/User')

const register = {
    type: GraphQLString,
    description: "Register a new user and return a token",
    args: {
        username: { type: GraphQLString },
        email: {type: GraphQLString },
        password: { type: GraphQLString},
        displayName: {type: GraphQLString},
    },
    async resolve(_,args) {
        const { username, email, password, displayName } = args;

        const user = User({username, email, password, displayName})
        await user.save();

        const token = createJWTToken({_id: user._id, username: user.username, email: user.email});
        
        return token;
    },
};

module.exports = {
    register,
}