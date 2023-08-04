import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WardrobeContext } from './Context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItemList from './AddItemList';

import MatchItemsList from './MatchItemsList';
import AllLooksList from './AllLooksList'

const Stack = createNativeStackNavigator();


const StackNavigator = () => {

  const [wardrobe, setWardrobe] = useContext(WardrobeContext)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    saveData()
  }, [wardrobe])
  const saveData = async () => {
    await AsyncStorage.setItem('wardrobe', JSON.stringify(wardrobe))
  }

  const loadData = async () => {
    const loadedWardrobeValue = await AsyncStorage.getItem('wardrobe')
    const loadedWardrobe = JSON.parse(loadedWardrobeValue)
    if (loadedWardrobe) {
      setWardrobe(loadedWardrobe)
    }
  }
  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }

    console.log('Done.')
  }

  //clearAll()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Item to Match" component={AddItemList} options={{ headerShown: false }} />
      <Stack.Screen name="Match Items" component={MatchItemsList} options={{ headerTitle: " " }} />
      <Stack.Screen name="All Looks" component={AllLooksList} />
    </Stack.Navigator>
  )
}

export default StackNavigator