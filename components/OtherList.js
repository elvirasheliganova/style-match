import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef, useEffect } from 'react'
import { WardrobeContext } from '../Context'




const OtherList = ({ other, setOther }) => {
  const { width, height } = useWindowDimensions()
  const [wardrobe, setWardrobe] = useContext(WardrobeContext)
  const others = wardrobe.filter((w) => w.tag !== "top")
  const [activeOtherId, setActiveOtherId] = useState();
  const activeOther = others.find((o) => activeOtherId === o.id)

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }) => {
      setActiveOtherId(viewableItems[0].item.id);

    },
  );
  const handleVisibleOther = () => { }

  useEffect(() => {
    setOther(activeOther)
    //console.warn(other)
  }, [activeOtherId])

  return (
    <View style={{ flex: 1 }}>
      {/*  <Text style={{}}>Others</Text> */}

      <FlatList
        data={others}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{ flex: 1, backgroundColor: 'lightblue', width: width * 0.8, height: height * 0.45, marginHorizontal: 50 }}
            onPress={handleVisibleOther}>
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

export default OtherList