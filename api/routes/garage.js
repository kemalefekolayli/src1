const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('../config/dbconfig')
const GarageController = require('../controllers/GarageController')
const middleware = require('../middlewares/verify')
const middleware1 = require('../middlewares/validation')


router.put('/update_garage', [], GarageController.updategarage )

router.delete('/delete_garage', [], GarageController.deletegarage)

router.get('/get_garage', [], GarageController.getgarage)

router.post('/add_garage', [], GarageController.addgarage)







module.exports = router


