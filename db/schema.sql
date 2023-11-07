DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    esrb_rating TEXT,
    price DECIMAL(6,2) CHECK (price > 0),
    game_type TEXT,
    genre TEXT,
    release_year YEAR,
    is_banned BOOLEAN DEFAULT false
);