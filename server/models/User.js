const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true 
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: { 
        type: String,
        required: true,
        minlength: 5
    },
    token: { type: String },
    createdAt: { type: String }
});

const User = model('User', userSchema);

module.exports = User;