import mongoose from "mongoose"

const exposicionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    audio: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Exposicion = mongoose.model('Exposicion', exposicionSchema)

export default Exposicion