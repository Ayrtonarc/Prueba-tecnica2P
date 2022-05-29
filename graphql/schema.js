//consultas y mutaciones que podemos hacer en este archivo el schema define que es lo que se puede consultar alterar 
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { hello } = require('./queries');
const { register } = require('./mutations');

const QueryType = new GraphQLObjectType({ //querys
    name: "QueryType",
    description: 'The root query type',
    fields: {
        hello,
    }
});

//Mutaciones
const mutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "root type Qyery",
    fields: {
        register,
    },
});

module.exports  = new GraphQLSchema({
   query: QueryType,
   mutation: mutationType
});

