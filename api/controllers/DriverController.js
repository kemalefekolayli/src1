const driver_model = require('../models/driver_model')



exports.updatedriver = async (req, res) => {

    let data = {
        param1 : req.body.param1 ,
        param2 : req.body.param2 
    
        }
    let response = {}
    let result = await driver_model.updateDriver(data)

    if (result) {
        response = {
            "code": 200,
            "meta": "ok",
            "payload": result
        }
        res.status(200).send(response)
    } else {
        response = {
            "code": 5000,
            "meta": "database error"
        }
        res.status(500).send(response)
    }
}


exports.deletedriver = async (req, res) => {

 let driverid = req.body.driverid
 let result = await driver_model.deleteDriver(dname) 
 if (result) {
     response = {
         "code": 200,
         "meta": "ok",
         "payload": result
     }
     res.status(200).send(response)
 } else {
     response = {
         "code": 5000,
         "meta": "database error"
     }
     res.status(500).send(response)
 }
 

    
}

exports.getdriver = async (req, res) => {
    let response = {}
    let result = await driver_model.getDriver() 

    if (result) {
        response = {
            "code": 200,
            "meta": "ok",
            "payload": result
        }
        res.status(200).send(response)
    } else {
        response = {
            "code": 5000,
            "meta": "database error"
        }
        res.status(500).send(response)
    }
    

    
}
exports.adddriver = async (req, res) => {


    let data = {
        dname : req.body.dname ,
        username: req.body.name,
        password: req.body.password
    }
    let response = {}
    let result = await driver_model.addDriver(data) 

    if(result) {
        response = {
            "code": 200,
            "meta": "ok",
            "payload": result
        }
        res.status(200).send(response)

    } else {
        response = {
            "code": 5000,
            "meta": "database error"
        }
        res.status(500).send(response)
    }


    
}