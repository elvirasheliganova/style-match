import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'

export const WardrobeContext = createContext()



export const WardrobeStateProvider = props => {

  const [wardrobe, setWardrobe] = useState([])

  return (
    <WardrobeContext.Provider value={[wardrobe, setWardrobe]}>
      {props.children}
    </WardrobeContext.Provider>
  );
};
