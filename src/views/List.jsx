import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  View,
  Text,
  FlatList,
  Button
} from 'react-native'
import Loading from '../components/Loading'
import { ListItem } from 'react-native-elements'
import { getSearch } from '../store/actionCreators'
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const List = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const total_pages = useSelector(state => state.movieReducer.total_pages)
  const page = useSelector(state => state.movieReducer.page)
  const loading = useSelector(state => state.movieReducer.loading)
  const search = useSelector(state => state.movieReducer.search)
  const query = useSelector(state => state.movieReducer.query)

  if (loading) return <Loading />
  if (search === null) {
    return (
      <View>
        <Text>Not Found</Text>
      </View>
    )
  }

  const loadMore = () => {
    if (page === total_pages) {
      Alert.alert('PAGE END')
    } else {
      const sendPage = page + 1
      dispatch(getSearch(query, sendPage))
    }
  }

  const renderFooter = () => {
    return (
      <Button 
      title="LOAD MORE" 
      color="#393534" 
      onPress={loadMore}
      disabled={page === total_pages ? true : false}
      />
    )
  }

  const toDetail = (id) => {
    navigation.navigate('Detail', {
      id
    })
  }
  
  return (
    <FlatList
      data={search}
      renderItem={({ item }) => {
        return (
          <ListItem
            title={item.original_title}
            onPress={() => toDetail(item.id)}
          />
        )
      }}
      keyExtractor={item => item.id}
      ListFooterComponent={ renderFooter }
    />
  )
}

export default List