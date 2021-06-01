CREATE DATABASE favmovies;

CREATE TABLE movie(
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR (50) UNIQUE NOT NULL,
    genre VARCHAR (255) NOT NULL,
    runtime INT NOT NULL,
    description VARCHAR (255) NOT NULL,
    rate INT, 
    notes VARCHAR (255),
);    
