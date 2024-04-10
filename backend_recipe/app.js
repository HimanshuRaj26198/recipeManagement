const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlHttp = require("express-graphql").graphqlHTTP;
require('dotenv').config();
require('./db/db')

const graphQlSchema = require('./Schema/index');
const graphQlResolver = require('./resolvers/index');


const app = express();
app.use(cors('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true
}))


app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("App listening on PORT: " + process.env.PORT)
    } else {
        console.log("Error in listening App")
    }
})


