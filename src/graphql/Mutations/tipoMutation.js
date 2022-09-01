import mongoose from "mongoose";
import Tipo from '../../models/Tipo'

export const tipoMutation = {

    createTipo: async (_, {lista, _id_subcategoria, _id_categoria_general}) => {
        const idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)
    
        // console.log("Lista", lista)
        const newTipo = new Tipo({
            lista, _id_subcategoria: idSubcategoria, _id_categoria_general: idCategoriaGeneral
        })
        return await newTipo.save()
    },
    
    updateTipo: async (_, {_id_tipo, lista, _id_subcategoria, _id_categoria_general}) => {
        const idTipo = mongoose.Types.ObjectId(_id_tipo)
        const idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)
    
        return await Tipo.findOneAndUpdate({_id: idTipo}, {
            lista, _id_subcategoria: idSubcategoria, _id_categoria_general: idCategoriaGeneral
        }, {new: true})
    },
    
    deleteTipo: async (_, {_id_tipo}) => {
        const idTipo = mongoose.Types.ObjectId(_id_tipo)
        return await Tipo.findByIdAndDelete(idTipo)
    }
}
