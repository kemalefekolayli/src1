const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt')
const pool = require('../config/dbconfig')
global.config = require('../config/modulekey')
const storer = require('../redisinfo')


 

function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}



exports.login = async (req,res ) => {
    let data = {
        email : req.body.email,
        password : req.body.password
    }
    response = { }

    

    let ozgur = await pool.query('SELECT * FROM adminn WHERE email = $1 ', [data.email]);
    if(!ozgur.rows[0]) {
        return res.status(404).send('Invalid credential') 
    
} else {
    response = { 
        code : "2000" ,
        message : ozgur.rows[0] ,
        asd : data.password

    } 
    let auth = await bycrypt.compare(data.password, ozgur.rows[0].password)
    

    if(!auth) {res.status(401).send('Invalid password')}

    else {
      const username21 = generateRandomPassword(8)
      const passwordred = generateRandomPassword(5)
      const ozgurunkod = new URL('localhost:3000/login/secondary')

      ozgurunkod.searchParams.append('username21', username21 )

      dataPack = {
        passwordred : passwordred ,
        adminPasword : ozgur.rows[0].password ,
        adminEmail : ozgur.rows[0].email
      }
      const jsonString = JSON.stringify(dataPack)
      console.log('asd', jsonString);

        storer.storeData( username21 ,  jsonString )
        response = { 
          code: '2000',
          message: 'check ur e-mail',
          sifre : passwordred ,
          username21 : username21 ,
          expires_in : '5min' ,
          param : ozgurunkod
       }
       res.status(200).send(response)
       
    }
      }
    } 
    
     
exports.login1 = async (req, res) => {
   
  const passwordred1 = req.body.passwordred1
  let mykey = req.query.username21
  
 

  let mykey1 = await storer.fetchData(mykey)
  
  
  
  
  const ozgurObject = JSON.parse(mykey1);
  

  console.log('asd', passwordred1)
  console.log('123', ozgurObject.passwordred)



  if( passwordred1 == ozgurObject.passwordred )  {
    const token = jwt.sign(
      {
        email : ozgurObject.adminEmail,
        password : ozgurObject.adminPasword
      },
      global.config.SECRET_KEY, 
      {
        expiresIn: '1h',
      }
    );
    res.send(token) ;
    
 }
 else {
  res.status(400).send('şifre hatalı')
      
 }
}

 