//importa dependencia de la biblioteca express
import express, { json } from 'express'
//importa dependencia de la biblioteca morgan
import morgan from 'morgan'
//importa archivo .env - variables de entorno
import 'dotenv/config'
//importar el archivo usuarioRoutes del archivo usuario.routes.js
import museonaturales from './routes/museonaturales.routes'

//crea la aplicacion 
const app = express()

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT

//lee el body en formato json
app.use(json())
//imprime las acciones hacia cada endopoint en la terminal
app.use(morgan('dev'))
//endpoints
app.use(museonaturales)

app.listen(port, () => {
    console.log(`Escuchando request en ${port}`)
})