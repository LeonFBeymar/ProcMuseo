import mongoose from "mongoose"

const visitanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contrasenia:{
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Visitante = mongoose.model('Visitante', visitanteSchema)

export default Visitante