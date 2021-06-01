const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json()) // req body

//ROUTES

//create a movie
app.post("/addmovie", async (req, res) => { 
    try {
        //console.log(req.body)
        const { title, genre, runtime, description, rate, notes } = req.body
        const newMovie = await pool
        .query("INSERT INTO movie (title, genre, runtime, description, rate, notes) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [title, genre, runtime, description, rate, notes])

        res.json(newMovie.rows[0])  

    } catch (err) {
        console.log(err.message)   
    }   
})

//get all movies
app.get("/movies", async (req, res) => {
    try {
        const allMovies = await pool.query("SELECT * FROM movie")
        res.json(allMovies.rows)

    } catch (err) {
        console.log(err.message)
    }
})

//get a movie
app.get("/movies/:id", async (req, res) => {
    try {
        const { id } = req.params
        const movie = await pool.query("SELECT * FROM movie WHERE movie_id = $1", [id])
        res.json(movie.rows[0])
        
    } catch (err) {
        console.log(err.message)
    }
})

//update a movie
app.put("/movies/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateMovie = await pool.query("UPDATE movie SET description = $1 WHERE movie_id = $2", 
        [description, id])

        res.json("Movie was updated!")

    } catch (err) {
        console.log(err.message)
    }
})

//delete a movie
app.delete("/movies/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteMovie = await pool.query("DELETE FROM movie WHERE movie_id = $1", [id])
        res.json("Movie was deleted!")
        
    } catch (err) {
        console.log(err.message)
    }
})


app.listen(5000, () => {
    console.log("Server has started on port 5000")
})