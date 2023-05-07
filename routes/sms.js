const express = require('express')
const router = express.Router()
const smsController =   require('../controllers/sms'); 

router.get('/', smsController.findAll);
router.post('/', smsController.create);

module.exports = router 
