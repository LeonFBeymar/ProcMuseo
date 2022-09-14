import mongoose from "mongoose"

const SalaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Sala = mongoose.model('Sala', SalaSchema)

export default Sala