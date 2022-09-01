"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _categoriaGeneralMutation = require("./Mutations/categoriaGeneralMutation");

var _descargableMutation = require("./Mutations/descargableMutation");

var _ofertaMutation = require("./Mutations/ofertaMutation");

var _productoMutation = require("./Mutations/productoMutation");

var _subcategoriaMutation = require("./Mutations/subcategoriaMutation");

var _tipoMutation = require("./Mutations/tipoMutation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Mutation = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _categoriaGeneralMutation.categoriaGeneralMutation), _subcategoriaMutation.subcategoriaMutation), _tipoMutation.tipoMutation), _productoMutation.productoMutation), _ofertaMutation.ofertaMutation), _descargableMutation.descargableMutation);

exports.Mutation = Mutation;