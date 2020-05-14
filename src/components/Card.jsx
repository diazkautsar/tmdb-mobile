import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

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
          height: 300,
          borderRadius: 7,
        }} />
    </Card>
  )
}

const CardComponent = ({data}) => {
  return (
    <View style={styles.cardComponent}>
      <ScrollView horizontal={true}>
        {data.map((movie, index) => {
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
    borderRadius: 7
  },
  cardComponent: {
    // width: "100%", 
    // height: "50%",
  }
})
export default CardComponent