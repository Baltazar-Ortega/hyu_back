import mongoose from "mongoose";
import CategoriaGeneral from "../../models/CategoriaGeneral";

export const categoriaGeneralMutation = {
  createCategoriaGeneral: async (
    _,
    { label, uri_label, has_subcategorias }
  ) => {
    const newCategoriaGeneral = new CategoriaGeneral({
      label,
      uri_label,
      has_subcategorias,
    });
    return await newCategoriaGeneral.save();
  },

  updateCategoriaGeneral: async (
    _,
    { _id_categoria_general, label, uri_label, has_subcategorias }
  ) => {
    const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general);
    return await CategoriaGeneral.findOneAndUpdate(
      { _id: idCategoriaGeneral },
      {
        label,
        uri_label,
        has_subcategorias,
      },
      { new: true }
    );
  },

  deleteCategoriaGeneral: async (_, { _id_categoria_general }) => {
    const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general);
    return await CategoriaGeneral.findByIdAndDelete(idCategoriaGeneral);
  },
};
