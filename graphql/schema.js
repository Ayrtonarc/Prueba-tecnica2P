//consultas y mutaciones que podemos hacer en este archivo el schema define que es lo que se puede consultar alterar 
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { users } = require('./queries');
const { register, login } = require('./mutations');


const QueryType = new GraphQLObjectType({ //querys
    name: "QueryType",
    description: 'The root query type',
    fields: {
       users ,
    }
});

//Mutaciones
const mutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "root type Qyery",
    fields: {
        register,
        login
    },
});

module.exports  = new GraphQLSchema({
   query: QueryType,
   mutation: mutationType
});

