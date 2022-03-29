const { Router } = require("express");
const db = require("../db")

const router = Router()

router.get("/users", (req, res) => {
  db.listar()
    .then(users => res.json(users))
    .catch((error) => res.json({ error }))
})

router.post("/users", (req, res) => {
  db.ingresar(req.body)
    .then(() => res.json({ message: "creado" }))
    .catch((error) => res.json({ error }))
})

router.delete("/users/:id", (req, res) => {
  db.eliminar(id)
    .then(() => res.json({ message: "eliminado" }))
    .catch((error) => res.json({ error }))
})

module.exports = router
