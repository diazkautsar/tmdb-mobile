import {
  SET_NOW_PLAYING, SET_LOADING, SET_UPCOMING, SET_POPULAR
} from '../actionType'

const initialState = {
  loading: false,
  nowPlaying: [],
  popular: [],
  upcoming: []
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      }
    
    case SET_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      }

    case SET_POPULAR:
      return {
        ...state,
        popular: action.payload
      }
  }
  return state
}