const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../../services/auth.service');
const {SEND_RESPONSE} = require('../../../../utils/helpers');

router.post('/:model', auth.IsAuthenticated(), async (req, res) => {
    try {
        const data = await controller.Create(req);
        SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(res, ex.message);
    }
});
router.post('/:model/list', auth.IsAuthenticated(), async (req, res) => {
    try {
         const data = await controller.Read(req);
         SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(res, ex.message);
    }
});
router.put('/:model', auth.IsAuthenticated(), async (req, res) => {
   try {
       const data = await controller.Update(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex);
   }
});
router.post('/:model/findById', auth.IsAuthenticated(), async (req, res) => {
   try {
       const data = await controller.FindById(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex);
   }
});
router.post('/:model/hardDelete', auth.IsAuthenticated(), async(req, res) => {
    try {
        const data = await controller.HardDelete(req);
        SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(ex);
    }
});
router.get('/:model/listForOptions', auth.IsAuthenticated(), async (req, res) => {
    try {
        const data = await controller.ListForOptions(req);
        SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(res, ex);
    }
});

module.exports = router;
