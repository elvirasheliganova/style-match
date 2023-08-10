import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const ItemTag = ({ text, item, setTag, image }) => {
  return (
    <TouchableOpacity style={{ padding: 10, backgroundColor: '#c3f2fa', borderRadius: 10, marginHorizontal: 10 }} onPress={() => {
      setTag(text)
    }
    }>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ItemTag