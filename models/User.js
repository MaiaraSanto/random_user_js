const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    dob: {
        date: Date,
        age: Number
    },
    location: {
        country: String
    },
    picture: {
        large: String
    },
    cell: String,
    login: {
        password: String
    }
});

module.exports = mongoose.model('User', userSchema);
