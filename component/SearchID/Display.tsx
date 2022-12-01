import { StyleSheet, Text, View, ActivityIndicator, Button, FlatList, Image } from 'react-native'
import React from 'react'
import UsedataAPI from '../../hooks/SearchID/APIdata';

const Displayscreen = ({ route }) => {
    const {params} = route
    const {searchItem} = params
    const { state } = UsedataAPI();
    const renderItemAPI = ({ item }) => {

        if (item.id==(searchItem)) {
          return (
  
            <View style = {styles.container}>
              <View style = { styles.text}>
              <Text style ={{ fontSize:20,color:'black',fontWeight:'700',}}>
                {item.id}
              </Text>
              <Text style = {{ fontSize:20,color:'black',}}>
                {item.title}
              </Text>
              </View>
              
              <Image style = {{ height :90, width:90, resizeMode:'contain',alignSelf:'center',}}
              source = {{uri:item.url}}/>
            </View>
          )
        }
      }
    
  
    if (state.loading) {
      return (
        <View>
          <ActivityIndicator size='large' colour="#fff" />
        </View>
      )
    }
  
    if (state.error) {
      console.log(state.post.error)
    }
  return (
    <View>
        <View>
        <FlatList
          data={state.post.slice(0, 100)}
          renderItem={renderItemAPI}
          keyExtractor={item => item.id}

        />
      </View>
    </View>
  )
}

export default Displayscreen;

const styles = StyleSheet.create({
  container:{
    borderWidth:2,
    margin:10,
    padding:30,
  },
  text:{
   alignItems:'center',
   
  },
});
