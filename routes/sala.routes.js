import express from 'express'
const router = express.Router()
import Sala from '../models/sala.model'

router.get('/exposicion', async (req, res) => {
    try {
        const sala = await Sala.find()
        res.send(sala)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/sala', async (req, res) => {
    try {
        const sala = req.body
        await Sala.create(sala)
        res.status(201).send(sala)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/sala/:id', async (req, res) => {
    try {
        let idSala = req.params.id
        let sala = req.body
        await Sala.findOneAndUpdate({ id: idSala }, sala)
        const salaResponse = await Sala.findOne({ id: idSala })
        res.send(salaResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})
router.delete('/sala/:id', async (req, res) => {
    try {
        let idSala = req.params.id
        await Sala.findOneAndRemove({ id: idSala })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});