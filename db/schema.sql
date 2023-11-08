DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    esrb_rating TEXT,
    price DECIMAL(6,2) CHECK (price > 0),
    game_type TEXT,
    genre TEXT,
    release_year INTEGER,
    is_banned BOOLEAN DEFAULT false
);
