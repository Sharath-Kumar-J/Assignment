import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PhotoScreen2 = ({ route }) => {
    const { params } = route
    const { Item } = params
    return (
        <View style ={styles.container}>
        <View style={{ margin:10,backgroundColor:"#e6e6fa",borderWidth: 1, alignSelf: 'center', alignContent: 'center',alignItems:'center', }}>
            <Image style={{ margin : 10,height: 100, width: 100, resizeMode: 'contain' }} source={{ uri: Item.url }} />
            <Text style = {{ margin : 10,color:'black', fontSize:25, fontWeight:'700'}}>{Item.id}</Text>
            <Text style = {{margin : 10, color:'black', fontSize:25,}}>{Item.title}</Text>

        </View>
        </View>
    )
}

export default PhotoScreen2;

const styles = StyleSheet.create({
    container: {
      flex :1,
      backgroundColor:"#87cefa",  
    },
})
