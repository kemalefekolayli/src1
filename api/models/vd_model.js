const pool = require('../config/dbconfig')



exports.updateVd = async (data) => {


    await pool.query('UPDATE driver_vehicle SET driverid = $1 WHERE id = $2 ', [data.param1, data.param2])

    return ({
        message: ' updatelendi ',
        param1: data.param1,
        param2: data.param2
    })

}

exports.addvd = async (data) => {

    await pool.query(
        `INSERT INTO driver_vehicle(vehicleid, driverid) 
     VALUES($1, $2)`,
        [data.vehicleid, data.driverid]



    );

    return ({
        message: ' Araca sürücü atandi ',
        vehicleid: vehicleid,
        driverid: driverid

    })
}




exports.getGarage = async () => {
    let ozgur = await pool.query('SELECT * FROM driver_vehicle ');

    return ozgur.rows
}


exports.deletevd = async (id) => {

    const silis = await pool.query('DELETE FROM driver_vehicle WHERE vehicleid = $1 ', [id])

    return ({
        message: 'delete işlemi yapilidi, idsi altta belirtilen arac-sürücü ikilisi silindi',
        id: id
    })

}