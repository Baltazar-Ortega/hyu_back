"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productoSchema = new _mongoose.Schema({
  _id_categoria_general: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  imagenUrl: {
    type: String
  },
  descripcion: {
    type: String,
    required: true
  },
  compra_minima: {
    type: Number,
    required: true
  },
  _id_unidad_de_medida: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  has_subcategoria: {
    type: Boolean,
    required: true
  },
  tipo: {
    type: String
  },
  mostrar_precio: {
    type: Boolean
  },
  precio: {
    type: Number
  },
  _id_subcategoria: {
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  collection: "productos"
});

var _default = (0, _mongoose.model)("Producto", productoSchema);

exports["default"] = _default;