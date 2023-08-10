import { View, Text, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef, useEffect } from 'react'
import { TotalWardrobeContext } from './Context'
import { useNavigation } from '@react-navigation/native'
import TopList from './components/TopList'
import OtherList from './components/OtherList'


const MatchItemsList = ({ route }) => {

  const { width, height } = useWindowDimensions()
  const [totalWardrobe, setTotalWardrobe] = useContext(TotalWardrobeContext)
  const navigation = useNavigation()
  const { wardrobe } = route.params
  const [look, setLook] = useState({})
  const [top, setTop] = useState()
  const [other, setOther] = useState()
  const [looks, setLooks] = useState([])

  useEffect(() => {
    setLook(look)
  }, [look])

  useEffect(() => {
    //  prevent double looks
    if (looks.find((l) => l.top === look.top && l.other === look.other)) { setLooks(looks) } else { setLooks([...looks, look]) }
  }, [look])

  return (
    <View style={{
      marginVertical: 70,
      marginHorizontal: 30,
      borderRadius: 30,
      flex: 1,
      backgroundColor: '#c8d6d5',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>

      <View style={{ flexDirection: 'row', height: height * 0.1, width: width * 0.85, justifyContent: 'space-around', paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ width: width * 0.3, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 15, backgroundColor: '#d7e6e5', borderRadius: 10 }} onPress={() => {
          setLook({ id: Date.now(), top: top, other: other })
        }} >
          <Text style={{ fontSize: 20, color: '#4e4d4d' }}>
            I like it
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: width * 0.4, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 15, backgroundColor: '#d7e6e5', borderRadius: 10 }}
          onPress={() => {
            setLooks(looks)
            setTotalWardrobe({ wardrobe, looks })
            console.log(looks)
            navigation.navigate("All Looks", { looks })

          }} >
          <Text style={{ fontSize: 20, color: '#4e4d4d' }}>See all looks</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingBottom: 15, }}>
        <View style={{ flex: 1 }}>
          <TopList setTop={setTop} top={top} wardrobe={wardrobe} />
        </View>
        <View style={{ flex: 1 }}>
          <OtherList other={other} setOther={setOther} wardrobe={wardrobe} />
        </View>
      </View>
      <TouchableOpacity
        style={{ width: width * 0.7, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 15, backgroundColor: '#d7e6e5', borderRadius: 10 }}
        onPress={() => {
          navigation.navigate("Add Item to Match")
        }} >
        <Text style={{ fontSize: 20, color: '#4e4d4d' }}>Add More Items to Match</Text>
      </TouchableOpacity>
    </View >
  )
}

export default MatchItemsList