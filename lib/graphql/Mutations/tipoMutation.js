"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tipoMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Tipo = _interopRequireDefault(require("../../models/Tipo"));

var tipoMutation = {
  createTipo: function () {
    var _createTipo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var lista, _id_subcategoria, _id_categoria_general, idSubcategoria, idCategoriaGeneral, newTipo;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              lista = _ref.lista, _id_subcategoria = _ref._id_subcategoria, _id_categoria_general = _ref._id_categoria_general;
              idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general); // console.log("Lista", lista)

              newTipo = new _Tipo["default"]({
                lista: lista,
                _id_subcategoria: idSubcategoria,
                _id_categoria_general: idCategoriaGeneral
              });
              _context.next = 6;
              return newTipo.save();

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createTipo(_x, _x2) {
      return _createTipo.apply(this, arguments);
    }

    return createTipo;
  }(),
  updateTipo: function () {
    var _updateTipo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_tipo, lista, _id_subcategoria, _id_categoria_general, idTipo, idSubcategoria, idCategoriaGeneral;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_tipo = _ref2._id_tipo, lista = _ref2.lista, _id_subcategoria = _ref2._id_subcategoria, _id_categoria_general = _ref2._id_categoria_general;
              idTipo = _mongoose["default"].Types.ObjectId(_id_tipo);
              idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              _context2.next = 6;
              return _Tipo["default"].findOneAndUpdate({
                _id: idTipo
              }, {
                lista: lista,
                _id_subcategoria: idSubcategoria,
                _id_categoria_general: idCategoriaGeneral
              }, {
                "new": true
              });

            case 6:
              return _context2.abrupt("return", _context2.sent);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function updateTipo(_x3, _x4) {
      return _updateTipo.apply(this, arguments);
    }

    return updateTipo;
  }(),
  deleteTipo: function () {
    var _deleteTipo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_tipo, idTipo;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_tipo = _ref3._id_tipo;
              idTipo = _mongoose["default"].Types.ObjectId(_id_tipo);
              _context3.next = 4;
              return _Tipo["default"].findByIdAndDelete(idTipo);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteTipo(_x5, _x6) {
      return _deleteTipo.apply(this, arguments);
    }

    return deleteTipo;
  }()
};
exports.tipoMutation = tipoMutation;