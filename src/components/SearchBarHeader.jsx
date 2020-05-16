import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import {
  SearchBar
} from 'react-native-elements'

import { getSearch } from '../store/actionCreators'

const SearchBarComponent = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    dispatch(getSearch(search, 1))
    navigation.navigate('List')
  }

  return (
    <SearchBar
      placeholder="Type Here..."
      containerStyle={{backgroundColor: "#393534" }}
      inputContainerStyle={{ marginTop: 15 }}
      platform="ios"
      value={search}
      onChangeText={(value) => setSearch(value)}
      searchIcon={{ onPress: handleSearch }}
    />
  )

}

export default SearchBarComponent