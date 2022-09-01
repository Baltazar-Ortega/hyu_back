import { Schema, model } from "mongoose";

const TipoValoresSchema = new Schema({
    valor: String, 
    label: String
});

const tipoSchema = new Schema({
  lista: [TipoValoresSchema],
  _id_subcategoria: {
    type: Schema.Types.ObjectId,
    required: true
  },
  _id_categoria_general: {
    type: Schema.Types.ObjectId,
    required: true
  },
}, {collection: 'tipos'});

export default model("Tipo", tipoSchema);