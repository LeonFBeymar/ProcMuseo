import { Router } from 'express'
import {
    leerTurno, crearTurno, actualizarTurno,
    eliminarTurno
} from '../controllers/turno.controllers'

const router = Router()

router.get('/turno',leerTurno);

router.post('/turno', crearTurno);

router.put('/turno/:id', actualizarTurno);

router.delete('/turno/:id', eliminarTurno);

export default router