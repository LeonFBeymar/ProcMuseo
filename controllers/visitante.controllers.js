import Visitante from '../models/visitante.model'

export const leerVisitante = async (req, res) => {
    try {
        const visitante = await Visitante.find()
        res.send(visitante)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearVisitante = async (req, res) => {
    try {
        const visitante = req.body
        await Visitante.create(visitante)
        res.status(201).send(visitante)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarVisitante = async (req, res) => {
    try {
        let idvisitante = req.params.id
        let visitante = req.body
        //busco y actualizo el visitante
        await Visitante.findOneAndUpdate({ id: idvisitante }, visitante)
        //busco el visitante modificado por el id
        const visitanteResponse = await Visitante.findOne({ id: idvisitante })
        res.send(visitanteResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarVisitante = async (req, res) => {
    try {
        let idvisitante = req.params.id
        //busco el visitante con el id y lo elimino
        await Visitante.findOneAndRemove({ id: idvisitante })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
};
