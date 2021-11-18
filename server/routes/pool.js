// Require the pg module:
const pg = require('pg');

// Create a pool object constructor.
const Pool = pg.Pool;

// Create our pool object using the above constructor:
const pool = new Pool({
    database: 'koalas', // the name of database, This can change!
    user: 'postgres',
    host: 'Localhost' // where is your database?
});

// Log to our console when our pool object makes a connection:
pool.on('connect', () => {
    console.log('Postgresql connected');
});

// Log to our console when something makes our pool error out:
pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});

module.exports = router;