const mongoose = require('mongoose');
const validator = require('validator')

const accountSchema = new mongoose.Schema({
    lastName: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    avatar: {
        type: Buffer
    }
})
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;