const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'ervina_backend_2',
    port: 5432,
    password: 'horsie16'
})

module.exports = databaseConfig