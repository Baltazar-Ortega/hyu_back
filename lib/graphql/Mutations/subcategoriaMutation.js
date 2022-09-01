"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subcategoriaMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Subcategoria = _interopRequireDefault(require("../../models/Subcategoria"));

var subcategoriaMutation = {
  createSubcategoria: function () {
    var _createSubcategoria = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var _id_categoria_general, label, uri_label, has_tipos, _id_tipos, idCategoriaGeneral, idTipos, newSubcategoria;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _id_categoria_general = _ref._id_categoria_general, label = _ref.label, uri_label = _ref.uri_label, has_tipos = _ref.has_tipos, _id_tipos = _ref._id_tipos;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              idTipos = null;

              if (_id_tipos) {
                idTipos = _mongoose["default"].Types.ObjectId(_id_tipos);
              }

              newSubcategoria = new _Subcategoria["default"]({
                _id_categoria_general: idCategoriaGeneral,
                label: label,
                uri_label: uri_label,
                has_tipos: has_tipos,
                _id_tipos: idTipos
              });
              _context.next = 7;
              return newSubcategoria.save();

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createSubcategoria(_x, _x2) {
      return _createSubcategoria.apply(this, arguments);
    }

    return createSubcategoria;
  }(),
  updateSubcategoria: function () {
    var _updateSubcategoria = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_subcategoria, _id_categoria_general, label, uri_label, has_tipos, _id_tipos, idSubcategoria, idCategoriaGeneral, idTipos;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_subcategoria = _ref2._id_subcategoria, _id_categoria_general = _ref2._id_categoria_general, label = _ref2.label, uri_label = _ref2.uri_label, has_tipos = _ref2.has_tipos, _id_tipos = _ref2._id_tipos;
              idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              idTipos = null;

              if (_id_tipos) {
                idTipos = _mongoose["default"].Types.ObjectId(_id_tipos);
              }

              _context2.next = 7;
              return _Subcategoria["default"].findOneAndUpdate({
                _id: idSubcategoria
              }, {
                _id_categoria_general: idCategoriaGeneral,
                label: label,
                uri_label: uri_label,
                has_tipos: has_tipos,
                _id_tipos: idTipos
              }, {
                "new": true
              });

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function updateSubcategoria(_x3, _x4) {
      return _updateSubcategoria.apply(this, arguments);
    }

    return updateSubcategoria;
  }(),
  deleteSubcategoria: function () {
    var _deleteSubcategoria = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_subcategoria, idSubcategoria;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_subcategoria = _ref3._id_subcategoria;
              idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              _context3.next = 4;
              return _Subcategoria["default"].findByIdAndDelete(idSubcategoria);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteSubcategoria(_x5, _x6) {
      return _deleteSubcategoria.apply(this, arguments);
    }

    return deleteSubcategoria;
  }()
};
exports.subcategoriaMutation = subcategoriaMutation;