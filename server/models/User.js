const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    username: String,
    createdAt: String
});

const User = model('User', userSchema);

module.exports = User;