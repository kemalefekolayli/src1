const garage_model = require('../models/garage_model')

exports.updategarage = async (req, res) => {
    let data = {
    param1 : req.body.param1 ,
    param2 : req.body.param2 

    }
    let response = {}
    let result = await garage_model.updateGarage(data)

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


exports.deletegarage = async (req, res) => {
    let address = req.body.address
    let result = await garage_model.deleteGarage(address) 
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


exports.getgarage = async (req, res) => {


    let response = {}
    let result = await garage_model.getGarage() 

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


exports.addgarage = async (req, res) => {
    let data = {
     garagename : req.body.garagename ,
     address : req.body.address  ,
     capacity : req.body.capacity ,
     adminid : req.body.adminid
    }
    let response = {}
    let result = await garage_model.addGarage(data)
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

