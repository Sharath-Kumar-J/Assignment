import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';

const Searchscreen = ({ navigation }) => {
 
  const [search, setSearch] = useState('')
  
  return (
    <View>
      <View style = {{borderWidth:2, margin:10,borderRadius:10,}}>
        <TextInput
          placeholder='Enter ID'
          onChangeText={(text) => { setSearch(text) }} />
      </View>

      <View style = {{ paddingLeft:70,paddingRight:80,}}>
        <Button
        title = 'search'
        onPress={() =>{navigation.navigate('Displayscreen',{searchItem:search})}}
        
        />
      </View>

    
    </View>
  )
}

export default Searchscreen;

const styles = StyleSheet.create({})