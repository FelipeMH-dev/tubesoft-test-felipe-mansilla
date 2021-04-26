"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimestamps = getTimestamps;
exports.createTimestamp = createTimestamp;
exports.getOneTimestamp = getOneTimestamp;
exports.deleteTimestamp = deleteTimestamp;
exports.updateTimestamp = updateTimestamp;

var _Timestamp = _interopRequireDefault(require("../models/Timestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTimestamps(_x, _x2) {
  return _getTimestamps.apply(this, arguments);
}

function _getTimestamps() {
  _getTimestamps = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var timestamps;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Timestamp["default"].findAll();

          case 3:
            timestamps = _context.sent;
            res.json({
              data: timestamps
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getTimestamps.apply(this, arguments);
}

function createTimestamp(_x3, _x4) {
  return _createTimestamp.apply(this, arguments);
}

function _createTimestamp() {
  _createTimestamp = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var timestamp, newTimestamp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            timestamp = req.body.timestamp;
            _context2.prev = 1;
            _context2.next = 4;
            return _Timestamp["default"].create({
              timestamp: timestamp
            }, {
              fields: ["timestamp"]
            });

          case 4:
            newTimestamp = _context2.sent;

            if (!newTimestamp) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Timestamp created successfully",
              data: newTimestamp
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createTimestamp.apply(this, arguments);
}

function getOneTimestamp(_x5, _x6) {
  return _getOneTimestamp.apply(this, arguments);
}

function _getOneTimestamp() {
  _getOneTimestamp = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, timestamp;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Timestamp["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            timestamp = _context3.sent;
            res.json({
              data: timestamp
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneTimestamp.apply(this, arguments);
}

function deleteTimestamp(_x7, _x8) {
  return _deleteTimestamp.apply(this, arguments);
}

function _deleteTimestamp() {
  _deleteTimestamp = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Timestamp["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Timestamp deleted successfully",
              count: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteTimestamp.apply(this, arguments);
}

function updateTimestamp(_x9, _x10) {
  return _updateTimestamp.apply(this, arguments);
}

function _updateTimestamp() {
  _updateTimestamp = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, timestamp, timestamps;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            timestamp = req.body.timestamp;
            _context6.prev = 2;
            _context6.next = 5;
            return _Timestamp["default"].findAll({
              attributes: ["id", "timestamp"],
              where: {
                id: id
              }
            });

          case 5:
            timestamps = _context6.sent;

            if (timestamps.length > 0) {
              timestamps.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(time) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return time.update({
                            timestamp: timestamp
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "Timestamp updated successfully",
              data: timestamps
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateTimestamp.apply(this, arguments);
}