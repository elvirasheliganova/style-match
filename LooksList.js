import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

const LooksList = ({ looks }) => {
  console.log(looks[1].other.image)
  return (
    <View style={{ flex: 1 }}>
      <Text>{looks[1].id}</Text>
      <FlatList
        data={looks}
        renderItem={({ item }) => (
          <Image
            source={item.other.image}
            style={{
              width: 260,
              height: 300,
              borderWidth: 2,
              borderColor: '#d35647',
              resizeMode: 'contain',
              margin: 8
            }}
          />
        )}
      />

    </View>
  )
}

export default LooksList