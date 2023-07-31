import { Text, Button, Image, View, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import * as ImagePicker from 'expo-image-picker';

export default function ImagePick({ image, setImage }) {
  //const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

      {image ? <Image source={{ uri: image }} style={{ width: 250, height: 250, borderRadius: 20 }} />
        :
        <TouchableOpacity onPress={pickImage} >
          <Text style={{ color: 'grey', fontSize: 20, padding: 10 }}>Pick photo from your gallery</Text>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" }}
            style={{ width: 250, height: 250, borderRadius: 20 }} />
        </TouchableOpacity>
      }
    </View>
  );
}
