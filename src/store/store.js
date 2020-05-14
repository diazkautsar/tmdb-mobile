import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { movieReducer } from './reducer/movieReducer'

export default createStore(
  combineReducers({
    movieReducer
  }),
  applyMiddleware(thunk)
)