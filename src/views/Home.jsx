import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native'
import {
  getNowPlaying,
  getUpcoming,
  getPopular,
  setInitialPage
} from '../store/actionCreators'

import Loading from '../components/Loading'
import Card from '../components/Card'

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.movieReducer.loading)
  const nowPlaying = useSelector(state => state.movieReducer.nowPlaying)
  const popular = useSelector(state => state.movieReducer.popular)
  const upcoming = useSelector(state => state.movieReducer.upcoming)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getPopular('movie'))
      dispatch(getUpcoming('movie'))
      dispatch(getNowPlaying('movie'))
      dispatch(setInitialPage())
    })
    return unsubscribe;
  }, [navigation])

  if (loading || nowPlaying.length == 0 || popular.length == 0 || upcoming.length == 0) return <Loading />

  const DATA = [
    {
      title: 'Now Playing',
      data: nowPlaying.results,
      icon: 'play'
    },
    {
      title: 'Coming Soon',
      data: upcoming.results,
      icon: 'arrow-circle-o-up'
    },
    {
      title: 'Popular',
      data: popular.results,
      icon: 'heart'
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card movies={item.data} icon={item.icon} title={item.title}/>}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#F4F4F4',
  }
})

export default Home