import Sala from '../models/sala.model'

export const leerSala = async (req, res) => {
    try {
        const sala = await Sala.find()
        res.send(sala)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearSala = async (req, res) => {
    try {
        const sala = req.body
        await Sala.create(sala)
        res.status(201).send(sala)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarSala = async (req, res) => {
    try {
        let idSala = req.params.id
        let sala = req.body
        await Sala.findOneAndUpdate({ id: idSala }, sala)
        const salaResponse = await Sala.findOne({ id: idSala })
        res.send(salaResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}
export const eliminarSala = async (req, res) => {
    try {
        let idSala = req.params.id
        await Sala.findOneAndRemove({ id: idSala })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}