import { Schema, model } from "mongoose";


const unidadMedidaSchema = new Schema({
  
  nombre: {
    type: String,
    required: true
  },
  nombre_singular: {
    type: String,
    required: true
  },
  nombre_plural: {
      type: String,
      required: true
  }
}, {collection: 'unidades_de_medida'});

export default model("UnidadMedida", unidadMedidaSchema)