import { Router } from 'express'
import {
    leerMuseo, crearMuseo, actualizarMuseo,
    eliminarMuseo
} from '../controllers/museo.controllers'

router.get('/museo',leerMuseo);

router.post('/museo', crearMuseo);

router.put('/museo/:id',actualizarMuseo);

router.delete('/museo/:id', eliminarMuseo);

export default router