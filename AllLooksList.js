import { View, Text, Image, useWindowDimensions, FlatList } from 'react-native'
import React from 'react'
import LooksList from './LooksList'

const AllLooksList = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions()
  const { tops, others } = route.params
  // console.warn(looks[1])
  return (
    <View style={{ flex: 1, marginHorizontal: 20, width: "100%" }}>
      <FlatList
        data={{ tops, others }}
        renderItem={({ top, other, index }) => (

          <View key={index} style={{ flex: 1 }}>
            <Image source={{ uri: top.image }} style={{ flex: 1, width: 100, height: 100, }} />
            <Image source={{ uri: other.image }} style={{ flex: 1, width: 100, height: 100, }} />
          </View>

        )} />


    </View>
  )
}

export default AllLooksList