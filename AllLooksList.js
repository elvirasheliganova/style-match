import { View, Text, Image, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { TotalWardrobeContext } from './Context'

const AllLooksList = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions()
  const { looks } = route.params
  const data = looks.filter(l => l.id)
  const [totalWardrobe, setTotalWardrobe] = useContext(TotalWardrobeContext)
  console.log(data)

  useEffect(() => {

  }, [looks])
  const renderItem = ({ item, index }) => (
    <View
      style={{
        margin: 10
      }}>

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
          navigation.navigate("Add Item to Match")
        }} >
        <Text style={{ fontSize: 20, color: '#4e4d4d' }}>Add More Items to Match</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AllLooksList