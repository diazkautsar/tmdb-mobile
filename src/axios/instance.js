import axios from 'axios';

export const baseUrlMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie'
})