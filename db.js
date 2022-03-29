require("dotenv").config()
const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL

const pool = new Pool(connectionString ? ({ connectionString, ssl: { rejectUnauthorized: false } }) : undefined)

const listar = () => pool.query('SELECT * FROM users').then((res) => res.rows)
const buscar = (id) => pool.query('SELECT * FROM users WHERE id = $1', [id]).then((res) => res.rows[0])
const ingresar = (x) => pool.query('INSERT INTO users(username,email,password) VALUES($1,$2,$3)', [x.username, x.email, x.password])
const eliminar = (id) => pool.query('DELETE FROM users WHERE id = $1', [id])

module.exports = { listar, buscar, ingresar, eliminar }
