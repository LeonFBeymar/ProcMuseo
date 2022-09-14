import express from 'express'
const router = express.Router()
import Visitante from '../models/Visitante.model'

router.get('/Visitantes', async (req, res) => {
    try {
        const Visitante = await Visitante.find()
        res.send(Visitante)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/Visitantes', async (req, res) => {
    try {
        const Visitante = req.body
        await Visitante.create(Visitante)
        res.status(201).send(Visitante)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/Visitantes/:id', async (req, res) => {
    try {
        let idVisitante = req.params.id
        let Visitante = req.body
        //busco y actualizo el Visitante
        await Visitante.findOneAndUpdate({ id: idVisitante }, Visitante)
        //busco el Visitante modificado por el id
        const VisitanteResponse = await Visitante.findOne({ id: idVisitante })
        res.send(VisitanteResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/Visitantes/:id', async (req, res) => {
    try {
        let idVisitante = req.params.id
        //busco el Visitante con el id y lo elimino
        await Visitante.findOneAndRemove({ id: idVisitante })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});
