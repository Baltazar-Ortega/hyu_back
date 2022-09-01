import mongoose from "mongoose";
import Oferta from "../../models/Oferta";

export const ofertaMutation = {
  createOferta: async (
    _,
    { titulo, descripcion, imagenUrl, fecha_vencimiento, precio }
  ) => {
    // fecha_vencimiento es Epoch time value
    const newOferta = new Oferta({
      titulo,
      descripcion,
      imagenUrl,
      fecha_vencimiento,
      precio,
    });
    return await newOferta.save();
  },
  updateOferta: async (
    _,
    { _id_oferta, titulo, descripcion, imagenUrl, fecha_vencimiento, precio }
  ) => {
    const idOferta = mongoose.Types.ObjectId(_id_oferta);

    return await Oferta.findOneAndUpdate(
      { _id: idOferta },
      {
        titulo,
        descripcion,
        imagenUrl,
        fecha_vencimiento,
        precio,
      },
      { new: true }
    );
  },
  deleteOferta: async (_, { _id_oferta }) => {
    const idOferta = mongoose.Types.ObjectId(_id_oferta);

    return await Oferta.findByIdAndDelete(idOferta);
  },
};
