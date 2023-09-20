const pool = require('../config/dbconfig')



exports.updateDriver = async (data) => {


    await pool.query('UPDATE driver SET dname = $1 WHERE id = $2 ', [data.param1, data.param2] )
 
    return ({
         message: ' Sürücü degistirildi ',
         param1: data.param1,
         param2: data.param2
     })
 
 }
 
 exports.addDriver = async (data) => {
 
     await pool.query(
         `INSERT INTO driver(dname, ppassword, adminid) 
      VALUES($1, $2, $3)`,
         [data.dname, data.ppassword, data.admindid]
     );
     return ({
         message: ' yeni sürücü eklendi' ,
         dname : req.body.dname ,
    ppassword : req.body.ppassword ,
    admin_id : req.body.admin_id
     })
 }
 
 exports.getDriver = async () => {
     let ozgur = await pool.query('SELECT * FROM driver ');
 
     return ozgur.rows
 }
 
 exports.deleteDriver = async (dname) => {
     await pool.query('DELETE FROM driver WHERE dname  = $1 ', [dname])
 
     return ({
      message: 'delete işlemi yapilidi, ismi altta belirtilen sürücü silindi' ,
      dname : dname   })
 
 }