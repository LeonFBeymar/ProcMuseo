import { Router } from 'express'
import {
    leerGuia, crearGuia, actualizarGuia,
    eliminarGuia
} from '../controllers/guia.controllers'

const router = Router()
router.get('/guia',leerGuia);

router.post('/guia', crearGuia);

router.put('/guia/:id',actualizarGuia);

router.delete('/guia/:id', eliminarGuia);

export default router