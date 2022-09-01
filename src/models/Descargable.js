import { model, Schema } from "mongoose";

const descargableSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    archivo_url: {
      type: String,
      required: true,
    },
    fecha_subido: {
      type: Date,
    },
    fecha_editado: {
      type: Date,
    },
  },
  {
    collection: "descargables"
  }
);

export default model("Descargable", descargableSchema);
