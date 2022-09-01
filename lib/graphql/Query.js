"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Producto = _interopRequireDefault(require("../models/Producto"));

var _CategoriaGeneral = _interopRequireDefault(require("../models/CategoriaGeneral"));

var _Subcategoria = _interopRequireDefault(require("../models/Subcategoria"));

var _Tipo = _interopRequireDefault(require("../models/Tipo"));

var _UnidadMedida = _interopRequireDefault(require("../models/UnidadMedida"));

var _Oferta = _interopRequireDefault(require("../models/Oferta"));

var _Descargable = _interopRequireDefault(require("../models/Descargable"));

var Query = {
  ping: function ping() {
    return "pong!";
  },
  productos: function () {
    var _productos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Producto["default"].find();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function productos() {
      return _productos.apply(this, arguments);
    }

    return productos;
  }(),
  categorias_generales: function () {
    var _categorias_generales = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _CategoriaGeneral["default"].find();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function categorias_generales() {
      return _categorias_generales.apply(this, arguments);
    }

    return categorias_generales;
  }(),
  subcategorias: function () {
    var _subcategorias = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Subcategoria["default"].find();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function subcategorias() {
      return _subcategorias.apply(this, arguments);
    }

    return subcategorias;
  }(),
  tipos: function () {
    var _tipos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _Tipo["default"].find();

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function tipos() {
      return _tipos.apply(this, arguments);
    }

    return tipos;
  }(),
  unidades_de_medida: function () {
    var _unidades_de_medida = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _UnidadMedida["default"].find();

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function unidades_de_medida() {
      return _unidades_de_medida.apply(this, arguments);
    }

    return unidades_de_medida;
  }(),
  ofertas: function () {
    var _ofertas = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _Oferta["default"].find();

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function ofertas() {
      return _ofertas.apply(this, arguments);
    }

    return ofertas;
  }(),
  descargables: function () {
    var _descargables = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _Descargable["default"].find();

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function descargables() {
      return _descargables.apply(this, arguments);
    }

    return descargables;
  }(),
  descargablePorId: function () {
    var _descargablePorId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_, _ref) {
      var _id_descargable, idDescargable;

      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _id_descargable = _ref._id_descargable;
              idDescargable = _mongoose["default"].Types.ObjectId(_id_descargable);
              _context8.next = 4;
              return _Descargable["default"].findById(idDescargable);

            case 4:
              return _context8.abrupt("return", _context8.sent);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function descargablePorId(_x, _x2) {
      return _descargablePorId.apply(this, arguments);
    }

    return descargablePorId;
  }(),
  productoPorId: function () {
    var _productoPorId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(_, _ref2) {
      var _id, idProducto;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _id = _ref2._id;
              idProducto = _mongoose["default"].Types.ObjectId(_id);
              _context9.next = 4;
              return _Producto["default"].findById(idProducto);

            case 4:
              return _context9.abrupt("return", _context9.sent);

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function productoPorId(_x3, _x4) {
      return _productoPorId.apply(this, arguments);
    }

    return productoPorId;
  }(),
  productoPorSlug: function () {
    var _productoPorSlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(_, _ref3) {
      var slug;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              slug = _ref3.slug;
              _context10.next = 3;
              return _Producto["default"].findOne({
                slug: slug
              });

            case 3:
              return _context10.abrupt("return", _context10.sent);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function productoPorSlug(_x5, _x6) {
      return _productoPorSlug.apply(this, arguments);
    }

    return productoPorSlug;
  }(),
  categoriaGeneralPorId: function () {
    var _categoriaGeneralPorId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(_, _ref4) {
      var _id_categoria_general, idCategoriaGeneral;

      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _id_categoria_general = _ref4._id_categoria_general;
              idCategoriaGeneral = _mongoose["default"].Types.ObjectId(_id_categoria_general);
              _context11.next = 4;
              return _CategoriaGeneral["default"].findById(idCategoriaGeneral);

            case 4:
              return _context11.abrupt("return", _context11.sent);

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function categoriaGeneralPorId(_x7, _x8) {
      return _categoriaGeneralPorId.apply(this, arguments);
    }

    return categoriaGeneralPorId;
  }()
};
exports.Query = Query;