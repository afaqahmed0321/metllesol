const express = require("express");
const controller = require("./controller");
const router = express.Router();
const {SEND_RESPONSE} = require('../../../../utils/helpers');
const auth = require('../../../../services/auth.service');
router.post("/register", async (req, res) => {
    try {
        let data = await controller.Register(req.body);
        SEND_RESPONSE(res, data);
    } catch (error) {
        SEND_RESPONSE(res, error);
    }
});
router.post("/login", async (req, res) => {
    try {
        let data = await controller.Login(req.body);
        SEND_RESPONSE(res, data);
    } catch (error) {
        SEND_RESPONSE(res, error);
    }
});
router.post("/changePassword",auth.IsAuthenticated(),async (req, res) => {
    try {
        let data = await controller.ChangePassword(req);
        SEND_RESPONSE(res, data);
    } catch (error) {
        SEND_RESPONSE(res, error);
    }
});
router.post("/forgotPassword", controller.sendEmail);
router.get("/resetPassword/:token",
    async (req, res) => {
        try {
            let data = await controller.ResetPassword(req);
            SEND_RESPONSE(res, data);
        } catch (error) {
            SEND_RESPONSE(res, error);
        }
    });

module.exports = router;
