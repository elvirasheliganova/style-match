import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { WardrobeContext } from './Context'
import ImagePicker from './components/ImagePicker'
import React, { useState, useEffect, useContext } from 'react'
import ItemTag from './components/ItemTag'
import { useNavigation } from '@react-navigation/native'


const AddItemList = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null);
  const [look, setLook] = useState({})
  const [tag, setTag] = useState({})
  // const [wardrobe, setWardrobe] = useState([])
  const [wardrobe, setWardrobe] = useContext(WardrobeContext)
  //console.warn(wardrobe)

  /*   useEffect(() => {
      setImage(null)
        , []
    }) */


  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>Get more of your wardrobe!</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImagePicker image={image} setImage={setImage} />



      </View>
      {image ?
        <>
          <View style={{ flexDirection: 'row' }}>
            <ItemTag text="top" tag={tag} setTag={setTag} image={image} />
            <ItemTag text="throuser" tag={tag} setTag={setTag} image={image} />
            <ItemTag text="skirt" tag={tag} setTag={setTag} image={image} />
          </View>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setWardrobe([...wardrobe, { tag: tag, id: Date.now(), image: image }])
              setImage(null)
            }
            }>
            <Text style={{ fontSize: 20, color: "#7e7b7b", marginHorizontal: 45, marginVertical: 15 }}>Add More Items</Text>
          </TouchableOpacity>

        </>
        :
        null}

      <TouchableOpacity
        style={{ backgroundColor: "#d6fbee", borderRadius: 20, marginBottom: 40, }}
        onPress={() => {
          navigation.navigate('Match Items')

          setWardrobe([...wardrobe, { tag: tag, id: Date.now(), image: image }])
          setImage(null)
        }
        }>
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginHorizontal: 45, marginVertical: 15 }}>
          Make a look
        </Text>
      </TouchableOpacity>





    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    marginHorizontal: 30,
    borderRadius: 30,
    flex: 1,
    backgroundColor: '#c8d6d5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default AddItemList