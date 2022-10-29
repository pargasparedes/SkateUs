const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    username: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    createdAt: { type: String }
});

const User = model('User', userSchema);

module.exports = User;