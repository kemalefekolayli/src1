const { Client } = require('pg')

const pool = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,
  })
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  module.exports = pool 