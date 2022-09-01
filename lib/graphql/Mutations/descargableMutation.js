"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descargableMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Descargable = _interopRequireDefault(require("../../models/Descargable"));

var descargableMutation = {
  createDescargable: function () {
    var _createDescargable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var nombre, archivo_url, fecha_subido, fecha_editado, newDescargable;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nombre = _ref.nombre, archivo_url = _ref.archivo_url, fecha_subido = _ref.fecha_subido, fecha_editado = _ref.fecha_editado;
              newDescargable = new _Descargable["default"]({
                nombre: nombre,
                archivo_url: archivo_url,
                fecha_subido: fecha_subido,
                fecha_editado: fecha_editado
              });
              _context.next = 4;
              return newDescargable.save();

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createDescargable(_x, _x2) {
      return _createDescargable.apply(this, arguments);
    }

    return createDescargable;
  }(),
  updateDescargable: function () {
    var _updateDescargable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_descargable, nombre, archivo_url, fecha_subido, fecha_editado, idDescargable;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_descargable = _ref2._id_descargable, nombre = _ref2.nombre, archivo_url = _ref2.archivo_url, fecha_subido = _ref2.fecha_subido, fecha_editado = _ref2.fecha_editado;
              idDescargable = _mongoose["default"].Types.ObjectId(_id_descargable);
              _context2.next = 4;
              return _Descargable["default"].findOneAndUpdate({
                _id: idDescargable
              }, {
                nombre: nombre,
                archivo_url: archivo_url,
                fecha_subido: fecha_subido,
                fecha_editado: fecha_editado
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

    function updateDescargable(_x3, _x4) {
      return _updateDescargable.apply(this, arguments);
    }

    return updateDescargable;
  }(),
  deleteDescargable: function () {
    var _deleteDescargable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_descargable, idDescargable;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_descargable = _ref3._id_descargable;
              idDescargable = _mongoose["default"].Types.ObjectId(_id_descargable);
              _context3.next = 4;
              return _Descargable["default"].findByIdAndDelete(idDescargable);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteDescargable(_x5, _x6) {
      return _deleteDescargable.apply(this, arguments);
    }

    return deleteDescargable;
  }()
};
exports.descargableMutation = descargableMutation;