import mongoose from "mongoose"

const visitanteSchema = new mongoose.Schema({
    
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Visitante = mongoose.model('Visitante', visitanteSchema)

export default Visitante