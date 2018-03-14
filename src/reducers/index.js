import { combineReducers } from 'redux';
import stickies from './stickies';
import nextId from './nextId';
import currentFilter from './currentFilter';


const rootReducer = combineReducers({
  stickies, 
  nextId,
  currentFilter,
})

export default rootReducer;
