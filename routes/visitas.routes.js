import express from 'express'
const router = express.Router()
import Visitas from '../models/Visitas.model'

router.get('/Visitass', async (req, res) => {
    try {
        const Visitas = await Visitas.find()
        res.send(Visitas)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/Visitass', async (req, res) => {
    try {
        const Visitas = req.body
        await Visitas.create(Visitas)
        res.status(201).send(Visitas)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/Visitass/:id', async (req, res) => {
    try {
        let idVisitas = req.params.id
        let Visitas = req.body
        //busco y actualizo el Visitas
        await Visitas.findOneAndUpdate({ id: idVisitas }, Visitas)
        //busco el Visitas modificado por el id
        const VisitasResponse = await Visitas.findOne({ id: idVisitas })
        res.send(VisitasResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/Visitass/:id', async (req, res) => {
    try {
        let idVisitas = req.params.id
        //busco el Visitas con el id y lo elimino
        await Visitas.findOneAndRemove({ id: idVisitas })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});
