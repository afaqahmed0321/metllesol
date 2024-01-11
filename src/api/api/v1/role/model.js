const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    permissions: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission'
        }],
        minlength: 1
    },
    isApproved: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
module.exports = Role = mongoose.model('Role', RoleSchema);
