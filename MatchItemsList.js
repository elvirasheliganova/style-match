import { View, Text, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef, useEffect } from 'react'
import { WardrobeContext } from './Context'
import { useNavigation } from '@react-navigation/native'
import TopList from './components/TopList'
import OtherList from './components/OtherList'


const MatchItemsList = () => {

  const { width, height } = useWindowDimensions()

  const navigation = useNavigation()
  const [wardrobe, setWardrobe] = useContext(WardrobeContext)

  const tops = wardrobe.filter((w) => w.tag === "top")
  const others = wardrobe.filter((w) => w.tag !== "top")
  const [activeTopId, setActiveTopId] = useState();
  // const [activeItemId, setActiveItemId] = useState();
  const [look, setLook] = useState({})
  const [looks, setLooks] = useState([])
  const [top, setTop] = useState()
  const [other, setOther] = useState()
  /*  const viewabilityConfig = {
     itemVisiblePercentThreshold: 51,
   };
 
   const onViewableItemsChanged = useRef(
     ({ viewableItems }) => {
       setActiveTopId(viewableItems[0].item.id);
       //console.warn("hi")
     },
   ); */
  /* const onViewableItemsChanged = useRef(
    ({ viewableItems }) => {
      setActiveItemId(viewableItems[0].item.id);
    },
  ); */
  const handleVisibleTop = () => { console.warn(activeTopId, tops) }
  // const handleVisibleOther = () => { console.warn(activeOtherId, tops) }
  // const activeTop = tops.find((t) => activeTopId === t.id)
  //const activeOther = others.find((o) => o.id === activeOtherId)
  //console.warn(activeTopId)

  useEffect(() => {
    setLooks((prevlooks) => ([prevlooks, look]))
    // console.warn(looks)
  }, [look])

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <View style={{ flexDirection: 'row', height: height * 0.1, width: width * 0.85, justifyContent: 'space-around' }}>
        <TouchableOpacity style={{ width: width * 0.4, justifyContent: 'center', alignItems: 'center', padding: 10, marginVertical: 20, backgroundColor: '#c8d6d5', borderRadius: 10 }} onPress={() => {
          setLook({ id: Date.now(), top: top, other: other })
          setLooks((prevlooks) => ([prevlooks, look]))
          // console.warn(look)

        }} >
          <Text style={{ fontSize: 20, color: '#4e4d4d' }}>
            I like it
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: width * 0.4, justifyContent: 'center', alignItems: 'center', padding: 10, marginVertical: 20, backgroundColor: '#c8d6d5', borderRadius: 10, justifyContent: 'center' }}
          onPress={() => navigation.navigate("All Looks", { tops, others })} >
          <Text style={{ fontSize: 20, color: '#4e4d4d' }}>See all looks</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingBottom: 15, }}>
        <View style={{ flex: 1, }}>
          {/* <OtherList other={other} setOther={setOther} /> */}
          <TopList setTop={setTop} top={top} />
        </View>


        <View style={{ flex: 1 }}>


          <OtherList other={other} setOther={setOther} />
          {/* <View style={{ flex: 1, backgroundColor: 'lightyellow' }}>
          <FlatList
            data={others}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: 'lightblue', width: 300, height: 300, marginHorizontal: 40 }}
              //    onPress={handleVisibleItem}
              >
                <Image
                  key={index}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode='cover'
                  source={{ uri: item.image }}

                />
              </TouchableOpacity>

            )}
            horizontal
            viewabilityConfig={viewabilityConfig}
          //onViewableItemsChanged={onViewableItemsChanged.current}

          />
        </View> */}


        </View>
      </View>

    </View >
  )
}

export default MatchItemsList