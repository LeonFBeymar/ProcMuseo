import { Router } from 'express'
import {
    leerExposicion, crearExposicion, actualizarExposicion,
    eliminarExposicion
} from '../controllers/exposicion.controllers'

const router = Router()

router.get('/exposicion',leerExposicion);

router.post('/exposicion', crearExposicion);

router.put('/exposicion/:id', actualizarExposicion);

router.delete('/exposicion/:id', eliminarExposicion);

export default router