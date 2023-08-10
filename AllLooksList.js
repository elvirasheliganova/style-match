import { View, Text, Image, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { TotalWardrobeContext } from './Context'
import LooksList from './LooksList'

const AllLooksList = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions()
  const { looks } = route.params
  const data = looks.filter(l => l.id)
  const [totalWardrobe, setTotalWardrobe] = useContext(TotalWardrobeContext)
  console.log(data)
  /* const looks = [

    { "id": 1691052439503, "other": { "id": 1690986751209, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/3F2B8A94-77C2-40C3-A6B0-463D8EAD700B.jpg", "tag": "throuser" }, "top": { "id": 1690986741793, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/8C7D1826-7A9A-48A7-8A85-B59490C6FAC5.jpg", "tag": "top" } },
    { "id": 1691052457371, "other": { "id": 1690986751209, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/3F2B8A94-77C2-40C3-A6B0-463D8EAD700B.jpg", "tag": "throuser" }, "top": { "id": 1690988060690, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/826C048E-9236-42E8-AD89-BACC5CAD9D81.jpg", "tag": "top" } },

    { "id": 1691092407316, "other": { "id": 1691091966702, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/CBD59FD6-5E31-48E9-8E98-0C86136848DE.jpg", "tag": "throuser" }, "top": { "id": 1691091907830, "image": "file:///Users/elviraselyganova/Library/Developer/CoreSimulator/Devices/79F9C24A-E8F1-4961-9887-80A2042537AE/data/Containers/Data/Application/7A309742-3997-406E-AC29-9F7811117FA0/Library/Caches/ExponentExperienceData/%2540anonymous%252Fstyle-match-0d6b4c0b-ae1e-420c-8b40-40e3696805e1/ImagePicker/DA8D8D24-CE25-4D54-81DD-846C7DE3EB57.jpg", "tag": "top" } }
  ] */
  useEffect(() => {
    //setTotalWardrobe([wardrobe, looks])
  }, [looks])
  const renderItem = ({ item, index }) => (
    <View
      style={{
        margin: 10

      }}>
      {/*   <Text>{item.top.id}</Text>
 */}

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
    <View style={{
      marginVertical: 70,
      marginHorizontal: 30,
      paddingTop: 30,
      borderRadius: 30,
      flex: 1,
      backgroundColor: '#c8d6d5',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <FlatList
        // horizontal
        data={data}
        renderItem={renderItem}
        numColumns={2}

      />
      <TouchableOpacity
        style={{ width: width * 0.7, backgroundColor: '#d7e6e5', borderRadius: 10, marginBottom: 10, }}
        onPress={() => {
          navigation.navigate('Match Items')
        }
        }>
        <Text
          style={{ fontSize: 20, color: '#4e4d4d', marginHorizontal: 45, marginVertical: 10, textAlign: 'center' }}>
          Make more looks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: width * 0.7, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 15, backgroundColor: '#d7e6e5', borderRadius: 10 }}
        onPress={() => {

          //console.log(looks)
          navigation.navigate("Add Item to Match")

        }} >
        <Text style={{ fontSize: 20, color: '#4e4d4d' }}>Add More Items to Match</Text>
      </TouchableOpacity>


    </View>
  )
}

export default AllLooksList