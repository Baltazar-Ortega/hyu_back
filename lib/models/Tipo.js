"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var TipoValoresSchema = new _mongoose.Schema({
  valor: String,
  label: String
});
var tipoSchema = new _mongoose.Schema({
  lista: [TipoValoresSchema],
  _id_subcategoria: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  _id_categoria_general: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  }
}, {
  collection: 'tipos'
});

var _default = (0, _mongoose.model)("Tipo", tipoSchema);

exports["default"] = _default;