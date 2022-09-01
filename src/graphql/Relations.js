import mongoose from "mongoose";
import CategoriaGeneral from "../models/CategoriaGeneral";
import Subcategoria from "../models/Subcategoria";
import UnidadMedida from "../models/UnidadMedida";

export const Relations = {
  Producto: {
    subcategoria: async (parent) => {
      const subcategoriaId = mongoose.Types.ObjectId(parent._id_subcategoria);
      return await Subcategoria.findById(subcategoriaId);
    },
    categoriaGeneral: async (parent) => {
      const categoriaGeneralId = mongoose.Types.ObjectId(
        parent._id_categoria_general
      );
      return await CategoriaGeneral.findById(categoriaGeneralId);
    },
    unidadMedida: async (parent) => {
      const unidadMedidaId = mongoose.Types.ObjectId(
        parent._id_unidad_de_medida
      );
      return await UnidadMedida.findById(unidadMedidaId);
    },
  },
};
