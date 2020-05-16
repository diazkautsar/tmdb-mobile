import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
  SearchBar
} from 'react-native-elements'

const SearchBarComponent = () => {
  const navigation = useNavigation()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    navigation.navigate('List')
  }

  return (
    <SearchBar
      placeholder="Type Here..."
      containerStyle={{backgroundColor: "#393534" }}
      platform="ios"
      value={search}
      onChangeText={(value) => setSearch(value)}
      searchIcon={{ onPress: handleSearch }}
    />
  )

}

export default SearchBarComponent