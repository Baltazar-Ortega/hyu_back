"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var categoriaGeneralSchema = new _mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  uri_label: {
    type: String,
    required: true
  },
  has_subcategorias: {
    type: Boolean,
    required: true
  }
}, {
  collection: "categorias_generales"
});

var _default = (0, _mongoose.model)("CategoriaGeneral", categoriaGeneralSchema);

exports["default"] = _default;