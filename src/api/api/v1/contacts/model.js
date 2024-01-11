
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,

    },
}, {
    timestamps: true
});
module.exports = Message = mongoose.model('Message', MessageSchema);