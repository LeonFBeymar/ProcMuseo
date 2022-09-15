import mongoose from "mongoose"

const visitasSchema = new mongoose.Schema({
    
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Visitas = mongoose.model('Visitas', visitasSchema)

export default Visitas