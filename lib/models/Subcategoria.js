"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var subcategoriaSchema = new _mongoose.Schema({
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
    type: _mongoose.Schema.Types.ObjectId
  },
  _id_categoria_general: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  }
}, {
  collection: 'subcategorias'
});

var _default = (0, _mongoose.model)("Subcategoria", subcategoriaSchema);

exports["default"] = _default;