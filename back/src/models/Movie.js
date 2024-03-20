const mongoose = require("mongoose");



const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
    },
    director: String,
    duration: String,
    genre: [String],
    rating: Number,
    poster: String,
    description: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

