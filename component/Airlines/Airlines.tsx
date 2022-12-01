import { StyleSheet, Text, View, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import fetchDatafromAPI from '../../hooks/Airlines/UseAPIdata'


const HomeScreen = () => {
    const { state } = fetchDatafromAPI();
    const [search, setSearch] = useState('')
    const renderItemAPI = ({ item }) => {
  
      if(item.country!==undefined){
        if (item.country.includes(search)) {
          return (
              <View style={{ flexDirection: 'row',borderRadius:10, justifyContent: 'space-around',margin:40,backgroundColor:"#add8e6" }}>
                  <Text style={{ fontSize:15,textAlign: 'center', color: '#000', alignSelf: 'center' }}>{item.name}</Text>
                  <Image style={{ height: 90, width: 90 }} source={{ uri: item.logo }} />
              </View>
          )
      }
      }
       
    }
    if (state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (state.error) {
        console.log(state.error)
    }
    return (
        <View style = {{backgroundColor:"#e0ffff"}}>

            <View>
                <TextInput
                    style={{ borderWidth: 2, margin: 20, borderRadius: 10, }}
                    placeholder='Enter country'
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            <View style={{ alignSelf: 'center',  margin: 20,borderWidth:2,borderRadius:10, }}>
                <FlatList
                    data={state.post.slice(0, 100)}
                    renderItem = {renderItemAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
