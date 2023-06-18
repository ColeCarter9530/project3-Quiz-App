const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    // example given in demo vid:--------------------------
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3
    }

});

const user = mongoose.model("User", userSchema);
module.exports - user;