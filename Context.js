import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'

export const TotalWardrobeContext = createContext()

export const TotalWardrobeStateProvider = props => {

  const [totalWardrobe, setTotalWardrobe] = useState([])

  return (
    <TotalWardrobeContext.Provider value={[totalWardrobe, setTotalWardrobe]}>
      {props.children}
    </TotalWardrobeContext.Provider>
  );
};
