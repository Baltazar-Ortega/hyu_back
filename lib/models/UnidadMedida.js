"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var unidadMedidaSchema = new _mongoose.Schema({
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
}, {
  collection: 'unidades_de_medida'
});

var _default = (0, _mongoose.model)("UnidadMedida", unidadMedidaSchema);

exports["default"] = _default;