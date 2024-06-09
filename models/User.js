const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    password: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('User', UserModel);
