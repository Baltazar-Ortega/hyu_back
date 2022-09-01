import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    _id_categoria_general: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    imagenUrl: {
      type: String,
    },
    descripcion: {
      type: String,
      required: true,
    },
    compra_minima: {
      type: Number,
      required: true,
    },
    _id_unidad_de_medida: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    has_subcategoria: {
      type: Boolean,
      required: true,
    },
    tipo: {
      type: String,
    },
    mostrar_precio: {
      type: Boolean
    },
    precio: {
      type: Number
    },
    _id_subcategoria: {
      type: Schema.Types.ObjectId,
    },
  },
  { collection: "productos" }
);

export default model("Producto", productoSchema);
