import Visitas from '../models/visitas.model'

export const leerVisitas = async (req, res) => {
    try {
        const Visitas = await Visitas.find()
        res.send(Visitas)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearVisitas = async (req, res) => {
    try {
        const visitas = req.body
        await Visitas.create(visitas)
        res.status(201).send(visitas)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarVisitas = async (req, res) => {
    try {
        let idVisitas = req.params.id
        let visitas = req.body
        //busco y actualizo el Visitas
        await Visitas.findOneAndUpdate({ id: idVisitas }, visitas)
        //busco el Visitas modificado por el id
        const VisitasResponse = await Visitas.findOne({ id: idVisitas })
        res.send(VisitasResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const borrarVisitas = async (req, res) => {
    try {
        let idVisitas = req.params.id
        //busco el Visitas con el id y lo elimino
        await Visitas.findOneAndRemove({ id: idVisitas })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
};
