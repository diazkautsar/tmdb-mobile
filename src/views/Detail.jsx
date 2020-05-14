import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  Image
} from 'react-native'
import { Card } from 'react-native-elements'

import { getDetail } from '../store/actionCreators'

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

  return (
    <Card>
      <View>
        <Text>Detail Page</Text>
      </View>
    </Card>
  )
}

export default Detail