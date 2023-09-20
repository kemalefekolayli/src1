const pool = require('../config/dbconfig')

exports.addProduct = async (data) => {

        await pool.query(
            `INSERT INTO adminn(username, password, email) 
         VALUES($1, $2, $3)`,
            [data.username, data.password, data.email]

        );
       return ({
            message: ' Kullanici eklendi ',
            password: data.password,
            username: data.username
        })

}

exports.updateProduct = async (data) => {

    await pool.query('UPDATE adminn SET ppassword = $1 WHERE id = $2 ', [data.param1, data.param2] )
     
    return({
        message: 'admin updatelendi ' ,
        param1 : data.param1 ,
        param2 : data.param2 
    })

}

exports.getProduct = async () => {
    let ozgur = await pool.query('SELECT * FROM adminn ');

    return ozgur.rows

}

exports.deleteProduct = async (password) => {
   
   await pool.query('DELETE FROM adminn WHERE password = $1 ', [password])

   return ({
    message: 'delete işlemi yapilidi, sifresi altta belirtilen admin silindi' ,
    password: password
   })

}