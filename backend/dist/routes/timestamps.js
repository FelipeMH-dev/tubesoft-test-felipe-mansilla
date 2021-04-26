"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _timestamp = require("../controllers/timestamp.controller");

var router = (0, _express.Router)();
// /api/timestamps/
router.post('/', _timestamp.createTimestamp);
router.get('/', _timestamp.getTimestamps); // /api/timestamps/:timestampID

router.get('/:id', _timestamp.getOneTimestamp);
router["delete"]('/:id', _timestamp.deleteTimestamp);
router.put('/:id', _timestamp.updateTimestamp);
var _default = router;
exports["default"] = _default;