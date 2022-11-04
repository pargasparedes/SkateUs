const { Schema, model } = require('mongoose');

const testSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: { 
        type: String,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    level: { 
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: { type: String }
});

const Test = model('Test', testSchema);

module.exports = Test;