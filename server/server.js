const express = require("express");
const models = require('./models');
const db = require("./config/connection");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const startApolloServer = async () => {
    await startApolloServer.start();
    apolloServer.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log("Server is active on PORT 3001"); 
        })
    })
};

startApolloServer();


