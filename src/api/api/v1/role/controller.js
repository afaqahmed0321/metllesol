const Role = require('./model');
const HTTP_RESPONSE = require('../../../../utils/httpResponses');
const MiscController = require('../misc/controller');

exports.Create = async (req) => {
    try {
        const {body, user} = req;
        const isNameExists = await Role.findOne({
            name: body.name
        });
        if (isNameExists) {
            return HTTP_RESPONSE.BAD_REQUEST('Role name already exists', isNameExists);
        }
        const postData = new Role({
            ...body,
            createdBy: user._id
        });
        const response = await postData.save();
        return HTTP_RESPONSE.CREATED('Role created successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex);
    }
}
exports.Read = async () => {
    try {
        return await MiscController.List({
            model: 'role',
            populate: [
                {
                    path: 'createdBy updatedBy',
                    select: {userName: 1, _id: 0}
                },
                {
                    path: 'permissions',
                    select: {name: 1}
                }
            ]
        })
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Update = async (req) => {
    try {
        let {body, user} = req;
        const response = await Role.findByIdAndUpdate(body._id, {
            ...body,
            updatedBy: user._id
        }, {
            new: true
        });
        return HTTP_RESPONSE.SUCCESS('Role updated successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Delete = async (req) => {
    try {
        const {params, user} = req;
        const response = await Role.findByIdAndUpdate(params.id, {
            isActive: false,
            isDeleted: true,
            updatedBy: user._id
        }, {
            new: true
        });
        return HTTP_RESPONSE.SUCCESS('Role deleted successfully', response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
