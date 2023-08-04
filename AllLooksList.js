import { View, Text, Image, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LooksList from './LooksList'

const AllLooksList = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions()
  const { looks } = route.params
  const data = looks.filter(l => l.id)
  console.log(data)
  /* const looks = [

    { "id": 1691052439503, "other": { "id": 1690986751209, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/3F2B8A94-77C2-40C3-A6B0-463D8EAD700B.jpg", "tag": "throuser" }, "top": { "id": 1690986741793, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/8C7D1826-7A9A-48A7-8A85-B59490C6FAC5.jpg", "tag": "top" } },
    { "id": 1691052457371, "other": { "id": 1690986751209, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/3F2B8A94-77C2-40C3-A6B0-463D8EAD700B.jpg", "tag": "throuser" }, "top": { "id": 1690988060690, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/826C048E-9236-42E8-AD89-BACC5CAD9D81.jpg", "tag": "top" } },

    { "id": 1691092407316, "other": { "id": 1691091966702, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/CBD59FD6-5E31-48E9-8E98-0C86136848DE.jpg", "tag": "throuser" }, "top": { "id": 1691091907830, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/DA8D8D24-CE25-4D54-81DD-846C7DE3EB57.jpg", "tag": "top" } }
  ] */

  const renderItem = ({ item, index }) => (
    <View>
      <Text>{item.top.id}</Text>


      <Image

        style={{ width: 100, height: 100 }}
        resizeMode='cover'
        source={{ uri: item.top.image }}

      />
      <Image

        style={{ width: 100, height: 100 }}
        resizeMode='cover'
        source={{ uri: item.other.image }}

      />
    </View>
  )

  return (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}

      />

    </View>
  )
}

export default AllLooksList