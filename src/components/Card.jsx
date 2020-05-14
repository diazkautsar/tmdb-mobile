import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';

const CardList = ({ movie }) => {
  return (
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
  )
}

const CardComponent = props => {
  return (
    <View style={styles.cardComponent}>
      <FontAwesome name={props.icon} size={24} color="#FF7314" 
      style={{
        marginLeft: 20
      }}
      >
        {props.title}
      </FontAwesome>
      <ScrollView horizontal={true}>
        {props.movies.map((movie, index) => {
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
    // width: "100%", 
    // height: "50%",
  }
})
export default CardComponent