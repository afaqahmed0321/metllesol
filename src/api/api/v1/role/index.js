const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../../../services/auth.service');
const {SEND_RESPONSE} = require('../../../../utils/helpers');

router.post('/',  auth.IsAuthenticated(),async (req, res) => {
   try {
       const data = await controller.Create(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex.message);
   }
});
router.get('/',  auth.IsAuthenticated(),async (req, res) => {
    try {
        const data = await controller.Read();
        SEND_RESPONSE(res, data);
    } catch(ex) {
        return SEND_RESPONSE(res, ex.message);
    }
});
router.put('/',  auth.IsAuthenticated(),async (req, res) => {
    try {
        const data = await controller.Update(req);
        SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(res, ex);
    }
});
router.delete('/:id',  auth.IsAuthenticated(),async (req, res) => {
   try {
       const data = await controller.Delete(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex);
   }
});

module.exports = router;
