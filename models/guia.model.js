import mongoose from "mongoose"

const guiaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Guia = mongoose.model('Guia', guiaSchema)

export default Guia