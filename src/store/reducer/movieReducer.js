import {
  SET_NOW_PLAYING, SET_LOADING, SET_UPCOMING, SET_POPULAR, SET_DETAIL, SET_VIDEO
} from '../actionType'

const initialState = {
  loading: false,
  nowPlaying: [],
  popular: [],
  upcoming: [],
  detail: [],
  video: []
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case SET_VIDEO:
      return {
        ...state,
        video: action.payload
      }

    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload
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