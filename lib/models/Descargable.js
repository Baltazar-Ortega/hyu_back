"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var descargableSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  archivo_url: {
    type: String,
    required: true
  },
  fecha_subido: {
    type: Date
  },
  fecha_editado: {
    type: Date
  }
}, {
  collection: "descargables"
});

var _default = (0, _mongoose.model)("Descargable", descargableSchema);

exports["default"] = _default;