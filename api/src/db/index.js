const db = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV || 'development']);

module.exports = db;