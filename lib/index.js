"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("./database");

var _graphqlYoga = require("graphql-yoga");

var _typeDefs = require("./graphql/typeDefs");

var _resolvers = require("./graphql/resolvers");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connectToDb)();

          case 3:
            server = new _graphqlYoga.GraphQLServer({
              typeDefs: _typeDefs.typeDefs,
              resolvers: _resolvers.resolvers
            });
            server.start({
              port: process.env.PORT || 3100
            }, function (_ref2) {
              var port = _ref2.port;
              console.log("Environment: ", process.env.NODE_ENV);
              console.log("Server on port", port);
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Ha ocurrido un error en la conexion a la base de datos");
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main();