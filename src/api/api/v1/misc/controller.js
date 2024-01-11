const HTTP_RESPONSE = require('../../../../utils/httpResponses');
const Permission = require('../permission/model');
const Role = require('../role/model');
const User = require('../user/model');

exports.Create = async (req) => {
    try {
        const {body, user} = req;
        const {model} = req.params;
        const Model = await specifyModel(model);
        delete body.meta;
        const isExistsByName = await Model.findOne({name: body.name});
        if (isExistsByName) {
            return HTTP_RESPONSE.BAD_REQUEST(`${model} name already exists`, isExistsByName);
        }
        const response = await Model.create({
            ...body,
            createdBy: user._id
        });
        return HTTP_RESPONSE.CREATED(`New ${model} created successfully`, response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}
exports.Read = async (req) => {
    try {
        const {body} = req;
        let {meta} = body;
        if (!meta) {
            meta = {};
        }
        const {model} = req.params;
        const where = meta.where || {};
        delete body.meta;
        const Model = await specifyModel(model);
        if (!meta.populate) {
            meta.populate = [];
        }
        const response = await Model.find(where, '-password').populate([
            {
                path: 'createdBy updatedBy',
                select: {userName: 1, _id: 0},
            },
            ...meta.populate
        ]);
        return HTTP_RESPONSE.SUCCESS(`${model} list fetched successfully`, response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}
exports.Update = async (req) => {
    try {
        const {body, user} = req;
        const {model} = req.params;
        const Model = await specifyModel(model);
        const response = await Model.findByIdAndUpdate(body._id, {
            ...body,
            updatedBy: user._id
        }, {
            new: true,
            useFindAndModify: false
        });
        delete response.password;
        return HTTP_RESPONSE.SUCCESS(`${model} updated successfully`, response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex);
    }
}
exports.FindById = async (req) => {
    try {
        const {body} = req;
        let {meta} = body;
        if (!meta) {
            meta = {};
        }
        const {model} = req.params;
        delete body.meta;
        const Model = await specifyModel(model);
        const response = await Model.findById(body._id, '-password').populate([
            {
                path: 'createdBy updatedBy',
                select: {userName: 1, _id: 0}
            },
            ...meta.populate
        ]);
        if (!response) {
            return HTTP_RESPONSE.NOT_FOUND('record not found');
        }
        return HTTP_RESPONSE.SUCCESS(`${model} retrieved successfully`, response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}
exports.HardDelete = async (req) => {
    try {
        const {body} = req;
        const {model} = req.params;
        const Model = await specifyModel(model);
        const response = await Model.deleteMany({...body});
        return HTTP_RESPONSE.SUCCESS(`${response["deletedCount"]} ${model}(s) permanently deleted`);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}

exports.ListForOptions = async (req) => {
    try {
        const {body} = req;
        const fieldName = body["field"] || 'name';
        const {model} = req.params;
        const Model = await specifyModel(model);
        const response = await Model.find({
            isActive: true,
            isApproved: true,
            isDeleted: false
        }, `${fieldName}`);
        return HTTP_RESPONSE.SUCCESS(`List of ${model} for options fetched successfully`, response);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}
exports.List = async (body) => {
    try {
        const {model, populate} = body;
        const Model = await specifyModel(model);
        const data = await Model.find({}).populate(populate);
        return HTTP_RESPONSE.SUCCESS(`List of ${model} fetched successfully`, data);
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER(ex.message);
    }
}

const specifyModel = async (model) => {
    let modelObj;
    switch(model.toLowerCase()) {
        case 'permission':
            modelObj = Permission;
            break;
        case 'role':
            modelObj = Role;
            break;
        case 'user':
            modelObj = User;
            break;
        case 'country':
            modelObj = Country;
            break;
            case 'category':
            modelObj = Category;
            break;
            case 'subcategory':
            modelObj = SubCategory;
            break;
            case 'product':
            modelObj = Product;
            break;
            case 'purchase':
            modelObj = Purchase;
            break;
            case 'sale':
            modelObj = Sale;
            break;
            case 'color':
            modelObj = Color;
            break;
            case 'size':
            modelObj = Size;
            break;
            case 'unit':
            modelObj = Unit;
            break;
            case 'currency':
            modelObj = Currency;
            break;
    }
    return modelObj;
}
