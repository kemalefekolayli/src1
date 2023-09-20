const product_model = require('../models/product_model')
const bcrypt = require('bcrypt');

exports.updateProduct = async (req, res) => {
    let data = {
        param1: req.body.param1,
        param2: req.body.param2

    }
    let response = {}
    let result = await product_model.updateProduct(data)

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

exports.deleteProduct = async (req, res) => {
    let password = req.body.password
    let result = await product_model.deleteProduct(password) 

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

exports.getproduct = async (req, res) => {

    let response = {}
    let result = await product_model.getProduct() 

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


exports.addproducts = async (req, res) => {
    
    // md5 jwt bycrypt 
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let data = {
        username: req.body.username ,
        password : hashedPassword,
        email : req.body.email
        
    }

    let response = {}
    let result = await product_model.addProduct(data)
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