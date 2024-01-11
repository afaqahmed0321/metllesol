'use strict';
const Permission = require('./model');
const HTTP_RESPONSE = require('../../../../utils/httpResponses');

exports.Create = async (req) => {
    try {
        const {body, user} = req;
        console.log(req);
        console.log("req",req.body);
        const isNameExists = await Permission.findOne({
            name: body.name
        });
        if (isNameExists) {
            return HTTP_RESPONSE.BAD_REQUEST('Permission already exists', isNameExists);
        }
        const postData = new Permission({
            ...body,
            createdBy: user._id
        });
        const response = await postData.save();
        return HTTP_RESPONSE.CREATED('Permission created successfully', response);
    } catch (ex) {
        console.log(ex);
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Read = async () => {
    try {
        const response = await Permission.find().populate({
            path: 'createdBy updatedBy',
            select: {userName: 1, _id: 0}
        });
        return HTTP_RESPONSE.SUCCESS('Permission list fetched successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Update = async (req) => {
    try {
        const {body, user} = req;
        const response = await Permission.findOneAndUpdate({
                _id: body._id
            }, {
                ...body,
                updatedBy: user._id
            }, {
                new: true
            }
        );
        return HTTP_RESPONSE.SUCCESS('Permission updated successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Delete = async (req) => {
    try {
        const {params, user} = req;
        const response = await Permission.findByIdAndUpdate(params.id, {
           isDeleted: true,
           isActive: false,
           updatedBy: user._id
        }, {
            new: true
        });
        return HTTP_RESPONSE.SUCCESS('Permission deleted successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
// miscellaneous methods
exports.ListForOptions = async () => {
    try {
        const response = await Permission.find({
            isApproved: true,
            isDeleted: false,
            isActive: true
        }, '_id name');
        return HTTP_RESPONSE.SUCCESS('Permission list for options fetched successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.MyList = async (req) => {
    try {
        const {user} = req;
        const response = await Permission.find({
            createdBy: user._id
        });
        return HTTP_RESPONSE.SUCCESS('Permission list fetched successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
