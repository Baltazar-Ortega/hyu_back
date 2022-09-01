"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriaGeneralMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _CategoriaGeneral = _interopRequireDefault(require("../../models/CategoriaGeneral"));

var categoriaGeneralMutation = {
  createCategoriaGeneral: function () {
    var _createCategoriaGeneral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var label, uri_label, has_subcategorias, newCategoriaGeneral;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              label = _ref.label, uri_label = _ref.uri_label, has_subcategorias = _ref.has_subcategorias;
              newCategoriaGeneral = new _CategoriaGeneral["default"]({
                label: label,
                uri_label: uri_label,
                has_subcategorias: has_subcategorias
              });
              _context.next = 4;
              return newCategoriaGeneral.save();

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createCategoriaGeneral(_x, _x2) {
      return _createCategoriaGeneral.apply(this, arguments);
    }

    return createCategoriaGeneral;
  }(),
  updateCategoriaGeneral: function () {
    var _updateCategoriaGeneral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_categoria_general, label, uri_label, has_subcategorias, idCategoriaGeneral;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_categoria_general = _ref2._id_categoria_general, label = _ref2.label, uri_label = _ref2.uri_label, has_subcategorias = _ref2.has_subcategorias;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              _context2.next = 4;
              return _CategoriaGeneral["default"].findOneAndUpdate({
                _id: idCategoriaGeneral
              }, {
                label: label,
                uri_label: uri_label,
                has_subcategorias: has_subcategorias
              }, {
                "new": true
              });

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function updateCategoriaGeneral(_x3, _x4) {
      return _updateCategoriaGeneral.apply(this, arguments);
    }

    return updateCategoriaGeneral;
  }(),
  deleteCategoriaGeneral: function () {
    var _deleteCategoriaGeneral = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_categoria_general, idCategoriaGeneral;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_categoria_general = _ref3._id_categoria_general;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              _context3.next = 4;
              return _CategoriaGeneral["default"].findByIdAndDelete(idCategoriaGeneral);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteCategoriaGeneral(_x5, _x6) {
      return _deleteCategoriaGeneral.apply(this, arguments);
    }

    return deleteCategoriaGeneral;
  }()
};
exports.categoriaGeneralMutation = categoriaGeneralMutation;