const pool = require('../config/dbconfig')




exports.updateGarage = async (data) => {


   await pool.query('UPDATE garage SET address = $1 WHERE id = $2 ', [data.param1, data.param2] )

   return ({
        message: ' Kullanici degistirildi ',
        param1: data.param1,
        param2: data.param2
    })

}

exports.addGarage = async (data) => {

    await pool.query(
        `INSERT INTO garage(garagename, address, capacity, adminid) 
     VALUES($1, $2, $3, $4)`,
        [data.garagename, data.address, data.capacity, data.adminid ]
    );
    return ({
        message: ' yeni garaj eklendi' ,
        garagename : data.garagename ,
        address : data.address ,
        capacity : data.capacity ,
        adminid : data.adminid
    })
}

exports.getGarage = async () => {
    let ozgur = await pool.query('SELECT * FROM garage ');

    return ozgur.rows
}

exports.deleteGarage = async (address) => {
    await pool.query('DELETE FROM garage WHERE password = $1 ', [address])

    return ({
     message: 'delete işlemi yapilidi, adresi altta belirtilen garaj silindi' ,
     adres: address    })

}