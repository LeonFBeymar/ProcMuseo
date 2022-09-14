import { Router } from 'express'
import {
    leerVisitante, crearVisitante, actualizarVisitante,
    eliminarVisitante
} from '../controllers/visitante.controllers'

router.get('/visitante',leerVisitante);

router.post('/visitante', crearVisitante);

router.put('/visitante/:id', actualizarVisitante);

router.delete('/visitante/:id', eliminarVisitante);

export default router