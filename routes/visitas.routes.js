import { Router } from 'express'
import {
    leerVisitas, crearVisitas, actualizarVisitas,
    eliminarVisitas
} from '../controllers/visitas.controllers'

router.get('/visitas',leerVisitas);

router.post('/visitas', crearVisitas);

router.put('/visitas/:id', actualizarVisitas);

router.delete('/visitas/:id', eliminarVisitas);

export default router