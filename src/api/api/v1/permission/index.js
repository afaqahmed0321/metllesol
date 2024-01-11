const express = require('express');
const router = express.Router();
const auth = require('../../../../services/auth.service');
const controller = require('./controller');
const {SEND_RESPONSE} = require('../../../../utils/helpers');

router.delete('/:id', async (req, res) => {
    try {
        const data = await controller.Delete(req);
        SEND_RESPONSE(res, data);
    } catch (ex) {
        SEND_RESPONSE(res, ex.message);
    }
});
router.get('/',  auth.IsAuthenticated(), async (req, res) => {
   try {
       const data = await controller.Read();
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex.message);
   }
});
router.post('/',  auth.IsAuthenticated(),async (req, res) => {
   try {
       const data = await controller.Create(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
        SEND_RESPONSE(res, ex.message);
   }
});
router.put('/',  auth.IsAuthenticated(),async (req, res) => {
   try {
       const data = await controller.Update(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex.message);
   }
});
//miscellaneous methods
router.get('/listForOptions', async (req, res) => {
   try {
       const data = await controller.ListForOptions();
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex.message);
   }
});
router.get('/myList',  auth.IsAuthenticated(),  async (req, res) => {
   try {
       const data = await controller.MyList(req);
       SEND_RESPONSE(res, data);
   } catch (ex) {
       SEND_RESPONSE(res, ex.message);
   }
});
module.exports = router;
