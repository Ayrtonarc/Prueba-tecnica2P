const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { extendSchemaImpl } = require("graphql/utilities/extendSchema");
const { setTheUsername } = require("whatwg-url");

const UserType = new GraphQLObjectType({
name: "UserType",
description: "The user type",
    fields:{
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        displayName: {type: GraphQLString},
    },  

})

module.exports = {
    UserType 
}