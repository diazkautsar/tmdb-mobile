import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import { getDetail } from '../store/actionCreators'
import { Fontisto, FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Linking,
  Alert,
} from 'react-native'

import Loading from '../components/Loading'

const Detail = ({ route }) => {
  const dispatch = useDispatch()
  const { id } = route.params
  const loading = useSelector(state => state.movieReducer.loading)
  const detail = useSelector(state => state.movieReducer.detail)
  const video = useSelector(state => state.movieReducer.video)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [])

  if (loading || detail.length == 0 || video.length == 0) return <Loading />

  const OpenUrl = ({ url }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`)
      }
    }, [url]);

    return (
      <Button onPress={handlePress} title='Trailer on Youtube' buttonStyle={{ margin: 5, backgroundColor: '#FF7314' }}/>
    )
  }

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: '100%',
        }}
        title={detail.title}
      >
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}>
          <View>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${detail.poster_path}` }}
              style={{
                width: 200,
                height: 300,
                borderRadius: 7,
              }} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ marginBottom: 5 }}>
              <Fontisto name="date" size={20} color="black"> Release Date:</Fontisto>
              <Text>{detail.release_date}</Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <FontAwesome name="money" size={20} color="black"> Revenue:</FontAwesome>
              <Text>{detail.revenue}</Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <Ionicons name="md-time" size={20} color="black"> Duration:</Ionicons>
              <Text>{detail.runtime} mins</Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <FlatList
                data={video}
                renderItem={({ item }) => {
                  if (item.site === 'YouTube' && item.type === 'Trailer') {
                    return <OpenUrl url={`https://www.youtube.com/watch?v=${item.key}`} />
                  }
                }}
                keyExtractor={item => item.key}
              />
              {/* <Text>{`https://www.youtube.com/watch?v=${video.key}`}></Text> */}
            </View>
          </View>
        </View>
      </Card>
      <Card
        containerStyle={{
          width: '100%',
          marginTop: 0
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <FlatList
            horizontal
            data={detail.genres}
            renderItem={({ item }) => {
              return <Text>{item.name} | </Text>
            }}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>OVERVIEW:</Text>
          <Text style={{ textAlign: 'justify' }}>{detail.overview}</Text>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default Detail