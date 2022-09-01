"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDb = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var connectToDb = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var MONGODB_URI, _process$env, MONGODB_HOST_PASSWORD, MONGODB_DATABASE;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            MONGODB_URI = "";

            if (process.env.NODE_ENV !== "production") {
              _process$env = process.env, MONGODB_HOST_PASSWORD = _process$env.MONGODB_HOST_PASSWORD, MONGODB_DATABASE = _process$env.MONGODB_DATABASE;
              MONGODB_URI = "mongodb+srv://baltazar:".concat(MONGODB_HOST_PASSWORD, "@hyu.ubgxo.mongodb.net/").concat(MONGODB_DATABASE, "?retryWrites=true&w=majority");
            } else {
              console.log("Estas en produccion");
              MONGODB_URI = process.env.MONGODB_URL;
            }

            _context.next = 4;
            return _mongoose["default"].connect(MONGODB_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connectToDb() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectToDb = connectToDb;