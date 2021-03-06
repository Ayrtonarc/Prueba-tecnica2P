const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const { connectDB } = require('./db')

connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('WTMyAPI')
})

app.use('/graphql',
    graphqlHTTP({
    schema,
    graphiql: true,
    })
);

app.listen(3000)
console.log('Server is running on 3000')

