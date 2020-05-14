import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native'
import Constants from 'expo-constants'
import {
  getNowPlaying,
  getUpcoming,
  getPopular
} from '../store/actionCreators'

import Loading from '../components/Loading'
import Card from '../components/Card'

const Home = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.movieReducer.loading)
  const nowPlaying = useSelector(state => state.movieReducer.nowPlaying)
  const popular = useSelector(state => state.movieReducer.popular)
  const upcoming = useSelector(state => state.movieReducer.upcoming)

  useEffect(() => {
    dispatch(getPopular('movie'))
    dispatch(getUpcoming('movie'))
    dispatch(getNowPlaying('movie'))
  }, [])

  if (loading || nowPlaying.length == 0 || popular.length == 0 || upcoming.length == 0) return <Loading />

  const DATA = [
    {
      title: 'Now Playing',
      data: nowPlaying.results
    },
    {
      title: 'Coming Soon',
      data: upcoming.results
    },
    {
      title: 'Popular',
      data: popular.results
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card data={item.data} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  }
})

export default Home