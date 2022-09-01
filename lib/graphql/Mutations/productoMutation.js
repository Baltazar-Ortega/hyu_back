"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productoMutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Producto = _interopRequireDefault(require("../../models/Producto"));

var productoMutation = {
  createProducto: function () {
    var _createProducto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
      var _id_categoria_general, nombre, slug, imagenUrl, descripcion, compra_minima, _id_unidad_de_medida, has_subcategoria, _id_subcategoria, tipo, mostrar_precio, precio, idCategoriaGeneral, idUnidadMedida, idSubcategoria, newProducto;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _id_categoria_general = _ref._id_categoria_general, nombre = _ref.nombre, slug = _ref.slug, imagenUrl = _ref.imagenUrl, descripcion = _ref.descripcion, compra_minima = _ref.compra_minima, _id_unidad_de_medida = _ref._id_unidad_de_medida, has_subcategoria = _ref.has_subcategoria, _id_subcategoria = _ref._id_subcategoria, tipo = _ref.tipo, mostrar_precio = _ref.mostrar_precio, precio = _ref.precio;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              idUnidadMedida = _mongoose["default"].Types.ObjectId(_id_unidad_de_medida);
              idSubcategoria = null;

              if (_id_subcategoria) {
                idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              }

              newProducto = new _Producto["default"]({
                _id_categoria_general: idCategoriaGeneral,
                nombre: nombre,
                slug: slug,
                imagenUrl: imagenUrl,
                descripcion: descripcion,
                compra_minima: compra_minima,
                _id_unidad_de_medida: idUnidadMedida,
                has_subcategoria: has_subcategoria,
                _id_subcategoria: idSubcategoria,
                tipo: tipo,
                mostrar_precio: mostrar_precio,
                precio: precio
              });
              _context.next = 8;
              return newProducto.save();

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createProducto(_x, _x2) {
      return _createProducto.apply(this, arguments);
    }

    return createProducto;
  }(),
  updateProducto: function () {
    var _updateProducto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
      var _id_producto, _id_categoria_general, nombre, slug, imagenUrl, descripcion, compra_minima, _id_unidad_de_medida, has_subcategoria, _id_subcategoria, tipo, mostrar_precio, precio, idCategoriaGeneral, idProducto, idSubcategoria, idUnidadMedida;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _id_producto = _ref2._id_producto, _id_categoria_general = _ref2._id_categoria_general, nombre = _ref2.nombre, slug = _ref2.slug, imagenUrl = _ref2.imagenUrl, descripcion = _ref2.descripcion, compra_minima = _ref2.compra_minima, _id_unidad_de_medida = _ref2._id_unidad_de_medida, has_subcategoria = _ref2.has_subcategoria, _id_subcategoria = _ref2._id_subcategoria, tipo = _ref2.tipo, mostrar_precio = _ref2.mostrar_precio, precio = _ref2.precio;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              idProducto = _mongoose["default"].Types.ObjectId(_id_producto);
              idSubcategoria = null;

              if (_id_subcategoria) {
                idSubcategoria = _mongoose["default"].Types.ObjectId(_id_subcategoria);
              }

              idUnidadMedida = _mongoose["default"].Types.ObjectId(_id_unidad_de_medida);
              _context2.next = 8;
              return _Producto["default"].findOneAndUpdate({
                _id: idProducto
              }, {
                _id_categoria_general: idCategoriaGeneral,
                nombre: nombre,
                slug: slug,
                imagenUrl: imagenUrl,
                descripcion: descripcion,
                compra_minima: compra_minima,
                _id_unidad_de_medida: idUnidadMedida,
                has_subcategoria: has_subcategoria,
                _id_subcategoria: idSubcategoria,
                tipo: tipo,
                mostrar_precio: mostrar_precio,
                precio: precio
              }, {
                "new": true
              });

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function updateProducto(_x3, _x4) {
      return _updateProducto.apply(this, arguments);
    }

    return updateProducto;
  }(),
  deleteProducto: function () {
    var _deleteProducto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var _id_producto, idProducto;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id_producto = _ref3._id_producto;
              idProducto = _mongoose["default"].Types.ObjectId(_id_producto);
              _context3.next = 4;
              return _Producto["default"].findByIdAndDelete(idProducto);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteProducto(_x5, _x6) {
      return _deleteProducto.apply(this, arguments);
    }

    return deleteProducto;
  }()
};
exports.productoMutation = productoMutation;