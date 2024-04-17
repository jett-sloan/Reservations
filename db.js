/** Database for lunchly */
const pg = require("pg");

const db = new pg.Client("postgres://postgres:sammydog12@localhost:5432/lunchly");

db.connect();

module.exports = db;
