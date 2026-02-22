/** @type {import('pg').Pool} */
const pool = require('./database');

const create = (description) =>
  pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [
    description,
  ]);

const get = () => pool.query('SELECT * FROM todo ORDER BY todo_id ASC');

const remove = (id) =>
  pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *', [id]);

module.exports = {
  create,
  get,
  remove,
};
