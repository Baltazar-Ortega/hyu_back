import { Schema, model } from "mongoose";

const ofertaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    imagenUrl: {
      type: String,
    },
    fecha_vencimiento: {
      type: Date,
      required: true,
    },
    precio: {
      type: Number,
    },
  },
  { collection: "ofertas" }
);

export default model("Oferta", ofertaSchema);
