import { Schema, model } from "mongoose";

const categoriaGeneralSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    uri_label: {
      type: String,
      required: true,
    },
    has_subcategorias: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "categorias_generales" }
);

export default model("CategoriaGeneral", categoriaGeneralSchema);
