const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answers: {
        type: String,
        required: true,
        trim: true
    },
});

const quiz = mongoose.model("Quiz", quizSchema);
module.exports - quiz;