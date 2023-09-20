const vehicle_model = require('../models/vehicle_model')

exports.updatevehicle = async (req, res) => {

    let data =
    {
        param1: req.body.param1,
        param2: req.body.param2

    }
    let response = {}
    let result = await vehicle_model.updateVehicle(data)

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

exports.deletevehicle = async (res, req) => {
    let plaka = req.body.plaka

    let result = await garage_model.deleteVehicle(plaka) 
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

exports.getvehicle = async (res, req) => {
    let response = {}
    let result = await garage_model.getVehicle() 

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

exports.addvehicle = async (res, req) => {
    let data = {
    plaka : req.body.plaka ,
    capacity : req.body.capacity ,
    garageid : req.body.garageid ,
    adminid : req.body.adminid
    }

    let response = {}
    let result = await garage_model.addVehicle() 

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