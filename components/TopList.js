import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef, useEffect } from 'react'
import { TotalWardrobeContext } from '../Context'




const TopList = ({ top, setTop, wardrobe }) => {
  const { width, height } = useWindowDimensions()
  const [totalWardrobe, setTotalWardrobe] = useContext(TotalWardrobeContext)
  const tops = wardrobe.filter((w) => w.tag === "top")
  const [activeTopId, setActiveTopId] = useState();
  const activeTop = tops.find((o) => activeTopId === o.id)
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }) => {
      setActiveTopId(viewableItems[0].item.id);
    },
  );

  useEffect(() => {
    setTop(activeTop)
  }, [activeTopId])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'pink', marginHorizontal: 30 }}>

      <FlatList
        data={tops}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{ flex: 1, backgroundColor: 'lightblue', width: width * 0.8, height: height * 0.45, }}
            onPress={{}}>
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode='cover'
              source={{ uri: item.image }}
            />
          </TouchableOpacity>

        )}
        horizontal
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        showsHorizontalScrollIndicator={false}

      />

    </View>
  )
}

export default TopList