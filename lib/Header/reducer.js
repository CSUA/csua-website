'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _createStateTree = require('./createStateTree');

var _redux = require('redux');

var defaultState = (0, _createStateTree.createStateTree)();

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}

exports.reducer = reducer = (0, _redux.combineReducers)({});

exports.reducer = reducer;