import mongoose from "mongoose";
import Producto from '../../models/Producto'

export const productoMutation = {
    createProducto: async (_, {_id_categoria_general, nombre, slug, imagenUrl, descripcion, 
        compra_minima, _id_unidad_de_medida, 
        has_subcategoria, _id_subcategoria, tipo, mostrar_precio, precio}) => {
        

        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)
        const idUnidadMedida = mongoose.Types.ObjectId(_id_unidad_de_medida)

        let idSubcategoria = null
        if(_id_subcategoria) {
            idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        }

        const newProducto = new Producto({_id_categoria_general: idCategoriaGeneral, 
            nombre, slug, imagenUrl, descripcion, compra_minima, _id_unidad_de_medida: idUnidadMedida,
            has_subcategoria, _id_subcategoria: idSubcategoria, tipo, mostrar_precio, precio})
        return await newProducto.save()

    },
    updateProducto: async (_, {_id_producto, _id_categoria_general, nombre, slug, imagenUrl, descripcion, 
        compra_minima, _id_unidad_de_medida,
        has_subcategoria, _id_subcategoria, tipo, mostrar_precio, precio}) => {
        const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general)
        const idProducto = mongoose.Types.ObjectId(_id_producto)
        
        let idSubcategoria = null
        if(_id_subcategoria) {
            idSubcategoria = mongoose.Types.ObjectId(_id_subcategoria)
        }
        
        const idUnidadMedida = mongoose.Types.ObjectId(_id_unidad_de_medida)

        return await Producto.findOneAndUpdate({_id: idProducto}, {_id_categoria_general: idCategoriaGeneral, 
            nombre, slug, imagenUrl, descripcion, 
            compra_minima, _id_unidad_de_medida: idUnidadMedida,
            has_subcategoria, _id_subcategoria: idSubcategoria, tipo, mostrar_precio, precio}, {new:true})
    },
    deleteProducto: async (_, {_id_producto}) => {
        const idProducto = mongoose.Types.ObjectId(_id_producto)

        return await Producto.findByIdAndDelete(idProducto)
    }
}