import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TotalWardrobeContext } from './Context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItemList from './AddItemList';

import MatchItemsList from './MatchItemsList';
import AllLooksList from './AllLooksList'

const Stack = createNativeStackNavigator();


const StackNavigator = () => {

  const [totalWardrobe, setTotalWardrobe] = useContext(TotalWardrobeContext)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    saveData()
  }, [totalWardrobe])
  const saveData = async () => {
    await AsyncStorage.setItem('wardrobe', JSON.stringify(totalWardrobe))
  }

  const loadData = async () => {
    const loadedTotalWardrobeValue = await AsyncStorage.getItem('wardrobe')
    const loadedTotalWardrobe = JSON.parse(loadedTotalWardrobeValue)
    if (loadedTotalWardrobe) {
      setTotalWardrobe(loadedTotalWardrobe)
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
      <Stack.Screen name="Match Items" component={MatchItemsList} options={{ headerShown: false }} />
      <Stack.Screen name="All Looks" component={AllLooksList} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator