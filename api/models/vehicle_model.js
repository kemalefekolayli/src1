const pool = require('../config/dbconfig')




exports.updateVehicle= async (data) => {


    await pool.query('UPDATE vehicle SET plaka = $1 WHERE id = $2 ', [data.param1, data.param2] )
 
    return ({
         message: ' Kullanici eklendi ',
         param1: data.param1,
         param2: data.param2
     })
 
 }

 exports.addVehicle = async (data) => {

    await pool.query(
        `INSERT INTO vehicle() 
     VALUES($1, $2, $3, $4)`,
        [data.plaka, data.capacity, data.garageid, data.adminid]



    )
    return ({
        message: ' Araç eklendi ',
        plaka: plaka,
        capacity: capacity,
        garageid: garageid,
        adminid: adminid,
        
    })
}

exports.getGarage = async () => {
    let ozgur = await pool.query('SELECT * FROM vehicle ');

    return ozgur.rows
}


exports.deleteGarage = async (plaka) => {
    await pool.query('DELETE FROM vehicle WHERE plaka = $1 ', [plaka])

    return ({
     message: 'delete işlemi yapilidi, plakasi altta belirtilen arac silindi' ,
     plaka: plaka    })

}