'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _stateTree = require('./stateTree');

var _redux = require('redux');

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stateTree.stateTree;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

// reducer = combineReducers({
//
// });


exports.reducer = reducer;