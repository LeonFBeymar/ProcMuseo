import Guia from '../models/guia.model'

export const leerGuia = async (req, res) => {
    try {
        const guia = await Guia.find()
        res.send(guia)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearGuia = async (req, res) => {
    try {
        const guia = req.body
        await Guia.create(guia)
        res.status(201).send(guia)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarGuia = async (req, res) => {
    try {
        let idGuia = req.params.id
        let guia = req.body
        await Guia.findOneAndUpdate({ id: idGuia }, guia)
        const guiaResponse = await Guia.findOne({ id: idGuia })
        res.send(guiaResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}
export const eliminarGuia = async (req, res) => {
    try {
        let idGuia = req.params.id
        await Guia.findOneAndRemove({ id: idGuia })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}