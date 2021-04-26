"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Timestamp = _database.sequelize.define('timestamps', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  timestamp: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Timestamp;
exports["default"] = _default;