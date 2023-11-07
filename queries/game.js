// import db connection
const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// INSERT INTO games (name, is_favorite) VALUES ('Red', true)
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games (name, esrb_rating, price, game_type, genre, release_year, is_banned) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        game.name,
        game.esrb_rating,
        game.price,
        game.game_type,
        game.genre,
        game.release_year,
        game.is_banned
      ]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id = $1 RETURNING *",
      id
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE games SET name=$1, esrb_rating=$2, price=$3, game_type=$4, genre=$5, release_year =$6, is_banned =$7 where id=$8 RETURNING *",
      [
        game.name,
        game.esrb_rating,
        game.price,
        game.game_type,
        game.genre,
        game.release_year,
        game.is_banned
      ]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
};
