const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "1234", 
    host: "localhost",
    post: 5432,
    database: "favmovies"
})

module.exports = pool