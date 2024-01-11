const Message = require('./model');
const HTTP_RESPONSE = require("../../../../utils/httpResponses");
require('dotenv').config();

exports.addMessage = async (data) => {
    try {
        const newMessage = new Message({
            ...data
        });
        let result = await newMessage.save();
        if(result){
            return HTTP_RESPONSE.SUCCESS("Message Saved Successfully",result);
        }
        else {
            return HTTP_RESPONSE.BAD_REQUEST("Message Not saved");
        }
    } catch (ex) {
        console.log(ex);
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}