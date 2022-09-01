import { Schema, model } from "mongoose";

const subcategoriaSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  uri_label: {
    type: String,
    required: true
  },
  has_tipos: {
    type: Boolean,
    required: true
  },
  _id_tipos: {
    type: Schema.Types.ObjectId
  },
  _id_categoria_general: {
    type: Schema.Types.ObjectId,
    required: true
  },
}, {collection: 'subcategorias'});

export default model("Subcategoria", subcategoriaSchema);