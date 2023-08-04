import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef, useEffect } from 'react'
import { WardrobeContext } from '../Context'




const TopList = ({ top, setTop }) => {
  const { width, height } = useWindowDimensions()
  const [wardrobe, setWardrobe] = useContext(WardrobeContext)
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
  const handleVisibleTop = () => { }

  useEffect(() => {
    setTop(activeTop)
    //console.warn(other)
  }, [activeTopId])

  return (
    <View style={{ flex: 1 }}>
      {/*   <Text style={{}}>Tops</Text>
 */}
      <FlatList
        data={tops}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{ flex: 1, backgroundColor: 'lightblue', width: width * 0.8, height: height * 0.45, marginHorizontal: 50 }}
            onPress={handleVisibleTop}>
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