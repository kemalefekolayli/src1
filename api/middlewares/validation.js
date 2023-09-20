const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt')
const pool = require('../config/dbconfig')
global.config = require('../config/modulekey')
const {check,body,query,validationResult}= require('express-validator')

exports.validationEmail = [ 
    body("email","email cant be empty").not().isEmpty() ,
    check("email","Email non-existant").isEmail() ,

    
    (req, res, next) => {

        const error = validationResult(req)

        if(!error.isEmpty()) {
           return res.send(error)
        } 
        
        next();

}

]

exports.validatePassword = [

    body("password","password cant be empty").not().isEmpty() ,

    (req, res, next) => {

        const error = validationResult(req)

        if(!error.isEmpty()) {
           return res.send(error)
        } 
        
        next();

}
]


exports.validatedriverId = [

    body("driverid","driverid cant be empty").not().isEmpty() ,

    (req, res, next) => {

        const error = validationResult(req)

        if(!error.isEmpty()) {
           return res.send(error)
        } 
        
        next();

}
]


