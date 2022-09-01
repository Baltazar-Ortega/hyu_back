"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ofertaMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Oferta = _interopRequireDefault(require("../../models/Oferta"));

var ofertaMutation = {
  createOferta: function () {
    var _createOferta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var titulo, descripcion, imagenUrl, fecha_vencimiento, precio, newOferta;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              titulo = _ref.titulo, descripcion = _ref.descripcion, imagenUrl = _ref.imagenUrl, fecha_vencimiento = _ref.fecha_vencimiento, precio = _ref.precio;
              // fecha_vencimiento es Epoch time value
              newOferta = new _Oferta["default"]({
                titulo: titulo,
                descripcion: descripcion,
                imagenUrl: imagenUrl,
                fecha_vencimiento: fecha_vencimiento,
                precio: precio
              });
              _context.next = 4;
              return newOferta.save();

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createOferta(_x, _x2) {
      return _createOferta.apply(this, arguments);
    }

    return createOferta;
  }(),
  updateOferta: function () {
    var _updateOferta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_oferta, titulo, descripcion, imagenUrl, fecha_vencimiento, precio, idOferta;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_oferta = _ref2._id_oferta, titulo = _ref2.titulo, descripcion = _ref2.descripcion, imagenUrl = _ref2.imagenUrl, fecha_vencimiento = _ref2.fecha_vencimiento, precio = _ref2.precio;
              idOferta = _mongoose["default"].Types.ObjectId(_id_oferta);
              _context2.next = 4;
              return _Oferta["default"].findOneAndUpdate({
                _id: idOferta
              }, {
                titulo: titulo,
                descripcion: descripcion,
                imagenUrl: imagenUrl,
                fecha_vencimiento: fecha_vencimiento,
                precio: precio
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

    function updateOferta(_x3, _x4) {
      return _updateOferta.apply(this, arguments);
    }

    return updateOferta;
  }(),
  deleteOferta: function () {
    var _deleteOferta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_oferta, idOferta;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_oferta = _ref3._id_oferta;
              idOferta = _mongoose["default"].Types.ObjectId(_id_oferta);
              _context3.next = 4;
              return _Oferta["default"].findByIdAndDelete(idOferta);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteOferta(_x5, _x6) {
      return _deleteOferta.apply(this, arguments);
    }

    return deleteOferta;
  }()
};
exports.ofertaMutation = ofertaMutation;