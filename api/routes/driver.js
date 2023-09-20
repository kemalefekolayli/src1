const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('../config/dbconfig')
const DriverController = require('../controllers/DriverController')
const middleware = require('../middlewares/verify')
const middleware1 = require('../middlewares/validation')


router.put ('update_driver', [], DriverController.updatedriver)

router.delete ('delete_driver', [], DriverController.deletedriver)

router.get ('get_driver', [], DriverController.getdriver)

router.post ('add_driver', middleware1.validatedriverId, DriverController.adddriver)



module.exports = router


