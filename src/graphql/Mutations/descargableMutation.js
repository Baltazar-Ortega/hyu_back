import mongoose from "mongoose";
import Descargable from "../../models/Descargable";

export const descargableMutation = {
  createDescargable: async (
    _,
    { nombre, archivo_url, fecha_subido, fecha_editado }
  ) => {
    const newDescargable = new Descargable({
      nombre,
      archivo_url,
      fecha_subido,
      fecha_editado,
    });
    return await newDescargable.save();
  },
  updateDescargable: async (
    _,
    { _id_descargable, nombre, archivo_url, fecha_subido, fecha_editado }
  ) => {
    const idDescargable = mongoose.Types.ObjectId(_id_descargable);

    return await Descargable.findOneAndUpdate(
      { _id: idDescargable },
      {
        nombre,
        archivo_url,
        fecha_subido,
        fecha_editado,
      },
      { new: true }
    );
  },
  deleteDescargable: async (_, { _id_descargable }) => {
    const idDescargable = mongoose.Types.ObjectId(_id_descargable);

    return await Descargable.findByIdAndDelete(idDescargable);
  },
};
