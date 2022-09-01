"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relations = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _CategoriaGeneral = _interopRequireDefault(require("../models/CategoriaGeneral"));

var _Subcategoria = _interopRequireDefault(require("../models/Subcategoria"));

var _UnidadMedida = _interopRequireDefault(require("../models/UnidadMedida"));

var Relations = {
  Producto: {
    subcategoria: function () {
      var _subcategoria = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent) {
        var subcategoriaId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                subcategoriaId = _mongoose["default"].Types.ObjectId(parent._id_subcategoria);
                _context.next = 3;
                return _Subcategoria["default"].findById(subcategoriaId);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function subcategoria(_x) {
        return _subcategoria.apply(this, arguments);
      }

      return subcategoria;
    }(),
    categoriaGeneral: function () {
      var _categoriaGeneral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent) {
        var categoriaGeneralId;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                categoriaGeneralId = _mongoose["default"].Types.ObjectId(parent._id_categoria_general);
                _context2.next = 3;
                return _CategoriaGeneral["default"].findById(categoriaGeneralId);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function categoriaGeneral(_x2) {
        return _categoriaGeneral.apply(this, arguments);
      }

      return categoriaGeneral;
    }(),
    unidadMedida: function () {
      var _unidadMedida = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent) {
        var unidadMedidaId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                unidadMedidaId = _mongoose["default"].Types.ObjectId(parent._id_unidad_de_medida);
                _context3.next = 3;
                return _UnidadMedida["default"].findById(unidadMedidaId);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function unidadMedida(_x3) {
        return _unidadMedida.apply(this, arguments);
      }

      return unidadMedida;
    }()
  }
};
exports.Relations = Relations;