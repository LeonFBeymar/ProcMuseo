import Turno from '../models/turno.model'

export const leerTurnos = async (req, res) => {
    try {
        const turno = await Turno.find()
        res.send(turno)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearTurno = async (req, res) => {
    try {
        const turno = req.body
        await Turno.create(turno)
        res.status(201).send(Turno)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarTurno = async (req, res) => {
    try {
        let idTurno = req.params.id
        let turno = req.body
        await Turno.findOneAndUpdate({ id: idTurno }, turno)
        const turnoResponse = await Turno.findOne({ id: idTurno })
        res.send(turnoResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarTurno = async (req, res) => {
    try {
        let idTurno = req.params.id
        await Turno.findOneAndRemove({ id: idTurno })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
};
