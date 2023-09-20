const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt')
const pool = require('../config/dbconfig')
global.config = require('../config/modulekey')



exports.verify = [ 
    
     (req, res, next) => {
   
    token = req.headers['x-acces-token']

    jwt.verify(token, global.config.SECRET_KEY,(err, decoded)=>{
        if (err) {
            console.log('aa', decoded)
            return   res.send('Invalid token')


        }
        else{
            next();

        }
    });
  

}
]
