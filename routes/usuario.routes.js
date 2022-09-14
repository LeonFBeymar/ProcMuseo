import { Router } from 'express'
import {
    leerUsuario, crearUsuario, actualizarUsuario,
    eliminarUsuario
} from '../controllers/usuario.controllers'

router.get('/usuario',leerUsuario);

router.post('/usuario', crearUsuario);

router.put('/usuario/:id', actualizarUsuario);

router.delete('/usuario/:id', eliminarUsuario);

export default router