const express = require("express")
const bodyParser = require("body-parser")
const { engine } = require("express-handlebars")
const front = require("./rutas/front")
const api = require("./rutas/api")

const port = process.env.PORT || 3000
const app = express()

const formatear = (key, data) => ({
  fecha: () => new Date(data).toISOString().split('T')[0]
}[key]())

app.engine("handlebars", engine({ helpers: { formatear } }))
app.set("view engine", "handlebars")
app.set("views", "./views")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(front)
app.use(api)

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`)
})
