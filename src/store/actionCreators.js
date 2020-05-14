import {
  baseUrlMovie
} from '../axios/instance'

import {
  SET_NOW_PLAYING, 
  SET_LOADING,
  SET_UPCOMING,
  SET_POPULAR,
  SET_DETAIL,
  SET_VIDEO
} from './actionType'


export const getNowPlaying = (value) => {
  return async function (dispatch) {
    switch (value) {
      case 'movie':
        dispatch(setLoading(true))
        try {
          const { data } = await baseUrlMovie({
            url: '/now_playing?api_key=c8ae4195093d441d66861f9d8d7f3e63&language=en-US',
            method: 'get',
          })
          dispatch(setNowPlaying(data))
        } catch (error) {
          console.log(error, "error on try and catch")
        }
        dispatch(setLoading(false))
        break;
    }
  }
}

export const getUpcoming = (value) => {
  return async function (dispatch) {
    switch (value) {
      case 'movie':
        dispatch(setLoading(true))
        try {
          const { data } = await baseUrlMovie({
            url: '/upcoming?api_key=c8ae4195093d441d66861f9d8d7f3e63&language=en-US'
          })
          dispatch(setUpcoming(data))
        } catch (error) {
          console.log(error)
        }
        dispatch(setLoading(false))
    }
  }
}

export const getPopular = (value) => {
  return async function (dispatch) {
    switch (value) {
      case 'movie':
        dispatch(setLoading(true))
        try {
          const { data } = await baseUrlMovie({
            url: '/popular?api_key=c8ae4195093d441d66861f9d8d7f3e63&language=en-US'
          })
          dispatch(setPopular(data))
        } catch (error) {
          console.log(error)
        }
        dispatch(setLoading(false))
        break;
    }
  }
}

export const getDetail = (param) => {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const {data} = await baseUrlMovie({
        url: `/${param}?api_key=c8ae4195093d441d66861f9d8d7f3e63&language=en-US`
      })
      const video = await baseUrlMovie({
        url: `/${param}/videos?api_key=c8ae4195093d441d66861f9d8d7f3e63&language=en-US`
      })
      dispatch(setVideo(video.data.results))
      dispatch(setDetail(data))
    } catch (error) {
      console.log(error)
    }
    dispatch(setLoading(false))
  }
}

export const setVideo = (value) => {
  return {
    type: SET_VIDEO,
    payload: value
  }
}

export const setDetail = (value) => {
  return {
    type: SET_DETAIL,
    payload: value
  }
}

export const setPopular = (value) => {
  return {
    type: SET_POPULAR,
    payload: value
  }
}

export const setUpcoming = (value) => {
  return {
    type: SET_UPCOMING,
    payload: value
  }
}

export const setNowPlaying = (value) => {
  return {
    type: SET_NOW_PLAYING,
    payload: value
  }
}

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value
  }
}