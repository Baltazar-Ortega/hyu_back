import mongoose from "mongoose";
import Subcategoria from '../../models/Subcategoria'

export const subcategoriaMutation = {
    createSubcategoria: async (_, {_id_categoria_general, label, uri_label, has_tipos, _id_tipos}) => {
        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)

        let idTipos = null
        if (_id_tipos) {
            idTipos = mongoose.Types.ObjectId(_id_tipos)
        }

        const newSubcategoria =  new Subcategoria({
            _id_categoria_general: idCategoriaGeneral, label, uri_label, has_tipos, _id_tipos: idTipos
        })
        return await newSubcategoria.save()

    },
    updateSubcategoria: async (_, {_id_subcategoria, _id_categoria_general, label, uri_label, has_tipos, _id_tipos}) => {
        const idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)

        let idTipos = null
        if (_id_tipos) {
            idTipos = mongoose.Types.ObjectId(_id_tipos)
        }

        return await Subcategoria.findOneAndUpdate({_id: idSubcategoria}, {
            _id_categoria_general: idCategoriaGeneral, label, uri_label, has_tipos, _id_tipos: idTipos
        }, {new: true})

    },
    deleteSubcategoria: async (_, {_id_subcategoria}) => {
        const idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        return await Subcategoria.findByIdAndDelete(idSubcategoria)
    }
}