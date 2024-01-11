const express = require("express");
const controller = require("./controller");
const router = express.Router();
const {SEND_RESPONSE} = require('../../../../utils/helpers');
const auth = require('../../../../services/auth.service');

router.post("/message", async (req, res) => {
    try {
        let data = await controller.addMessage(req.body);
        SEND_RESPONSE(res, data);
    } catch (error) {
        SEND_RESPONSE(res, error);
    }
});

module.exports = router;