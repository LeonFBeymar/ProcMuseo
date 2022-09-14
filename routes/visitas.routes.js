import { Router } from 'express'
import {
    leerVisitas, crearVisitas, actualizarVisitas,
    eliminarVisitas
} from '../controllers/visitas.controllers'

const router = Router()

router.get('/visitas',leerVisitas);

router.post('/visitas', crearVisitas);

router.put('/visitas/:id', actualizarVisitas);

router.delete('/visitas/:id', eliminarVisitas);

export default router