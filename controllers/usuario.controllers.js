import Usuario from '../models/usuario.model'

export const leerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.find()
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearUsuario = async (req, res) => {
    try {
        const usuario = req.body
        await Usuario.create(usuario)
        res.status(201).send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarUsuario = async (req, res) => {
    try {
        let idUsuario = req.params.id
        let usuario = req.body
        await Usuario.findOneAndUpdate({ id: idUsuario }, usuario)
        const UsuarioResponse = await Usuario.findOne({ id: idUsuario })
        res.send(UsuarioResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
        let idUsuario = req.params.id
        await Usuario.findOneAndRemove({ id: idUsuario })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
};
