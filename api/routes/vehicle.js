const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('../config/dbconfig')
const VehicleController = require('../controllers/VehicleController')
const middleware = require('../middlewares/verify')
const middleware1 = require('../middlewares/validation')

router.put('/update_vehicle', [], VehicleController.updatevehicle )

router.delete('/delete_vehicle', [], VehicleController.deletevehicle )

router.get('/get_vehicle', [], VehicleController.getvehicle)

router.post('/add_vehicle', [], VehicleController.addvehicle)


module.exports = router