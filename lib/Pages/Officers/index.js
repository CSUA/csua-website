'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionCreators = exports.reducer = exports.Officers = exports.createStateTree = undefined;

var _createStateTree = require('./createStateTree');

var _Officers = require('./Officers');

var _reducer = require('./reducer');

var _actionCreators = require('./actionCreators');

var actionCreators = _interopRequireWildcard(_actionCreators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _Officers.Officers;
exports.createStateTree = _createStateTree.createStateTree;
exports.Officers = _Officers.Officers;
exports.reducer = _reducer.reducer;
exports.actionCreators = actionCreators;