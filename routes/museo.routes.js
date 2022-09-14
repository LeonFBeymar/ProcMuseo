import express from 'express'
const router = express.Router()
import Museo from '../models/museo.model'

router.get('/museo', async (req, res) => {
    try {
        const museo = await Museo.find()
        res.send(museo)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/museo', async (req, res) => {
    try {
        const museo = req.body
        await Museo.create(museo)
        res.status(201).send(museo)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/museo/:id', async (req, res) => {
    try {
        let idMuseo = req.params.id
        let museo = req.body
        await Museo.findOneAndUpdate({ id: idMuseo }, museo)
        const museoResponse = await Museo.findOne({ id: idMuseo })
        res.send(museoResponse)
    } catch (err) {
        res.status(500).send(err)
    }
})
router.delete('/museo/:id', async (req, res) => {
    try {
        let idMuseo = req.params.id
        await Museo.findOneAndRemove({ id: idMuseo })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});