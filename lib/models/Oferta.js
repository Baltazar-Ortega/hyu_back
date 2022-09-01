"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ofertaSchema = new _mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  imagenUrl: {
    type: String
  },
  fecha_vencimiento: {
    type: Date,
    required: true
  },
  precio: {
    type: Number
  }
}, {
  collection: "ofertas"
});

var _default = (0, _mongoose.model)("Oferta", ofertaSchema);

exports["default"] = _default;