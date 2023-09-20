const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('../config/dbconfig')
const VehicleDriverController = require('../controllers/VehicleDriverController')
const middleware = require('../middlewares/verify')
const middleware1 = require('../middlewares/validation')



router.put('/update_vd', [], VehicleDriverController.updatevd)

router.delete('/delete_vd', [], VehicleDriverController.deletevd)

router.get('/get_vd', [], VehicleDriverController.getvd)

router.post('/add_vd', [], VehicleDriverController.addvd)




module.exports = router