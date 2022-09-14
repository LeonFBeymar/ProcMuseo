import express from 'express'
const router = express.Router()
import Usuario from '../models/Usuario.model'

router.get('/Usuarios', async (req, res) => {
    try {
        const Usuario = await Usuario.find()
        res.send(Usuario)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/Usuarios', async (req, res) => {
    try {
        const Usuario = req.body
        await Usuario.create(Usuario)
        res.status(201).send(Usuario)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/Usuarios/:id', async (req, res) => {
    try {
        let idUsuario = req.params.id
        let Usuario = req.body
        //busco y actualizo el Usuario
        await Usuario.findOneAndUpdate({ id: idUsuario }, Usuario)
        //busco el Usuario modificado por el id
        const UsuarioResponse = await Usuario.findOne({ id: idUsuario })
        res.send(UsuarioResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/Usuarios/:id', async (req, res) => {
    try {
        let idUsuario = req.params.id
        //busco el Usuario con el id y lo elimino
        await Usuario.findOneAndRemove({ id: idUsuario })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});
