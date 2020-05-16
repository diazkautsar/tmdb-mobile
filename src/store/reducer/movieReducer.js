import {
  SET_NOW_PLAYING, SET_LOADING, SET_UPCOMING, SET_POPULAR, SET_DETAIL, SET_VIDEO, SET_SEARCH, ADD_SEARCH
} from '../actionType'

const initialState = {
  loading: false,
  nowPlaying: [],
  popular: [],
  upcoming: [],
  detail: [],
  video: [],
  page: 1,
  search: null,
  total_pages: 0,
  query: ''
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case ADD_SEARCH:
      let newData = state.search.concat(action.payload)
      return {
        ...state,
        search: newData,
        page: state.page + 1
      }
    
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.results,
        total_pages: action.payload.pages,
        query: action.payload.query
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