import mongoose from "mongoose"

const TurnoSchema = new mongoose.Schema({
    Dia: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Turno = mongoose.model('Usuario', TurnoSchema)

export default Turno