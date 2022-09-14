import mongoose from "mongoose"

const museoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Museo = mongoose.model('Museo', museoSchema)

export default Museo