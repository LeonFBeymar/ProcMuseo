import Museo from '../models/museo.model'

export const leerMuseo =async (req, res) => {
    try {
        const museo = await Museo.find()
        res.send(museo)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearMuseo = async (req, res) => {
    try {
        const museo = req.body
        await Museo.create(museo)
        res.status(201).send(museo)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarMuseo =async (req, res) => {
    try {
        let idMuseo = req.params.id
        let museo = req.body
        await Museo.findOneAndUpdate({ id: idMuseo }, museo)
        const museoResponse = await Museo.findOne({ id: idMuseo })
        res.send(museoResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}
export const eliminarMuseo = async (req, res) => {
    try {
        let idMuseo = req.params.id
        await Museo.findOneAndRemove({ id: idMuseo })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}