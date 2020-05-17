import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  View, TouchableWithoutFeedback
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

  const toDetail = (param) => {
    navigation.navigate('Detail', {
      id: param
    })
  }

  return (
    <View>
      { favorite.map((item, i) => {
        return (
          <TouchableWithoutFeedback onPress={() => toDetail(item.id)}>
            <ListItem 
              title={item.original_title}
              key={item.id}
            />
          </TouchableWithoutFeedback>
        )
      }) }
    </View>
  )
}

export default FavoriteComponent