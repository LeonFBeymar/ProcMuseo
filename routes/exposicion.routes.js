import express from 'express'
const router = express.Router()
import Exposicion from '../models/exposicion.model'

router.get('/exposicion', async (req, res) => {
    try {
        const exposicion = await Exposicion.find()
        res.send(exposicion)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/exposicion', async (req, res) => {
    try {
        const exposicion = req.body
        await Exposicion.create(exposicion)
        res.status(201).send(exposicion)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/exposicion/:id', async (req, res) => {
    try {
        let idExposicion = req.params.id
        let exposicion = req.body
        await Exposicion.findOneAndUpdate({ id: idExposicion }, exposicion)
        const exposicionResponse = await Exposicion.findOne({ id: idExposicion })
        res.send(exposicionResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})
router.delete('/exposicion/:id', async (req, res) => {
    try {
        let idExposicion = req.params.id
        await Exposicion.findOneAndRemove({ id: idExposicion })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});