import { Router } from 'express'
import {
    leerSala, crearSala, actualizarSala,
    eliminarSala
} from '../controllers/Sala.controllers'

const router = Router()
router.get('/sala',leerSala);

router.post('/sala', crearSala);

router.put('/sala/:id',actualizarSala);

router.delete('/sala/:id', eliminarSala);

export default router