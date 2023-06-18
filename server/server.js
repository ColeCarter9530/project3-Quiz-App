const express = require("express");
const models = require('./models');
const db = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 3001;

db.once('open', () => {
    app.listen(PORT, () => {
        console.log("Server is active on PORT 3001"); 
    })
})
