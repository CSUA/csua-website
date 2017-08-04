import {createStateTree} from './createStateTree';
import {combineReducers} from 'redux';

function reducer(state = createStateTree(), action) {
  switch(action.type) {
    default:
      return state;
  }
}

reducer = combineReducers({
  
});

export {reducer};
