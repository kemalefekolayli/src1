const vd_model = require('../models/vd_model')

exports.updatevd = async (req, res) => {   

    let data = {
    param1 : req.body.param1 ,
    param2 : req.body.param2 
    }
    let response = {}
    let result = await vd_model.updatevd(data)

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

exports.deletevd = async (req, res) => {
    let vehicleid = req.body.id

    let response = {}
    let result = await vd_model.deletevd(id)

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



exports.getvd = async (req, res) => {
    let response = {}
    let result = await vd_model.getvd()

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


exports.addvd = async (req, res) => {

    let data = {
        vehicleid : req.body.vehicleid ,
        driverid : req.body.driverid
    }
  
    let response = {}
    let result = await vd_model.addvd(data)

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