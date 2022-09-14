//importa dependencia de la biblioteca express
import express, { json } from 'express'
//importa dependencia de la biblioteca morgan
import morgan from 'morgan'
//importa archivo .env - variables de entorno
import 'dotenv/config'
//importar el archivo usuarioRoutes del archivo usuario.routes.js
import exposicion from './routes/exposicion.routes'
import guia from './routes/guia.routes'
import museo from './routes/museo.routes'
import sala from './routes/sala.routes'
import turno from './routes/turno.routes'
import usuario from './routes/usuario.routes'
import visitante from './routes/visitante.routes'
import visitas from './routes/visitas.routes'


//crea la aplicacion 
const app = express()

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT

//lee el body en formato json
app.use(json())
//imprime las acciones hacia cada endopoint en la terminal
app.use(morgan('dev'))
//endpoints
app.use(exposicion)
app.use(guia)
app.use(museo)
app.use(sala)
app.use(turno)
app.use(usuario)
app.use(visitante)
app.use(visitas)




app.listen(port, () => {
    console.log(`Escuchando request en ${port}`)
})