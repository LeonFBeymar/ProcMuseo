import express from 'express'
const router = express.Router()
import Turno from '../models/Turno.model'

router.get('/Turnos', async (req, res) => {
    try {
        const Turno = await Turno.find()
        res.send(Turno)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/Turnos', async (req, res) => {
    try {
        const Turno = req.body
        await Turno.create(Turno)
        res.status(201).send(Turno)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/Turnos/:id', async (req, res) => {
    try {
        let idTurno = req.params.id
        let Turno = req.body
        //busco y actualizo el Turno
        await Turno.findOneAndUpdate({ id: idTurno }, Turno)
        //busco el Turno modificado por el id
        const TurnoResponse = await Turno.findOne({ id: idTurno })
        res.send(TurnoResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/Turnos/:id', async (req, res) => {
    try {
        let idTurno = req.params.id
        //busco el Turno con el id y lo elimino
        await Turno.findOneAndRemove({ id: idTurno })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});

export default router