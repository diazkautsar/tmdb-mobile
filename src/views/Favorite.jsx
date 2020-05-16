import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  View
} from 'react-native';
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const FavoriteComponent = () => {
  const navigation = useNavigation()
  const favorite = useSelector(state => state.movieReducer.favorite)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    })
    return unsubscribe;
  }, [navigation])

  return (
    <View>
      { favorite.map((item, i) => {
        return (
          <ListItem 
            title={item.original_title}
            key={item.id}
          />
        )
      }) }
    </View>
  )
}

export default FavoriteComponent