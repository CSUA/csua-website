import {createStateTree} from './createStateTree';
import {combineReducers} from 'redux';

let defaultState = createStateTree();

function reducer(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

reducer = combineReducers({
  
});

export {reducer};
