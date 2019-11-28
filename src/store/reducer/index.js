import { combineReducers } from 'redux';

// import exampleReducer from './example-reducer'
import user from './user'
import company from './company'

export default combineReducers({
  user,
  company
})