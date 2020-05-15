import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const CardList = ({ movie }) => {
  const navigation = useNavigation()

  const toDetail = () => {
    navigation.navigate('Detail', {
      id: movie.id
    })
  }

  return (
    <TouchableOpacity
    onPress={toDetail}
    >
      <Card
        containerStyle={styles.cardList}
        title={movie.title}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
          style={{
            width: 300,
            height: 450,
            borderRadius: 7,
          }} />
      </Card>
    </TouchableOpacity>
  )
}

const CardComponent = ({ movies, icon, title }) => {
  return (
    <View style={styles.cardComponent}>
      <FontAwesome name={icon} size={24} color="#FF7314"
        style={{
          marginLeft: 20
        }}
      >
        {title}
      </FontAwesome>
      <ScrollView horizontal={true}>
        {movies.map((movie, index) => {
          return <CardList movie={movie} key={index} />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardList: {
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  cardComponent: {
    margin: 10
  }
})
export default CardComponent