const postgres = require('postgres')

const sql = postgres('postgres://postgres:postgres@db:5432/node')

module.exports = {sql};