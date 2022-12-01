import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Earthquakemain = ({ route }) => {
    const { params } = route;
    const { Item } = params;
    
    return (
        <View style = {{flex:1,backgroundColor:"#ffffe0"}}>
        <View style= {{ backgroundColor:"#87cefa",alignItems:'center', borderWidth:2,padding:20,margin:10,}}>
            <Text style={{ fontSize: 25,color:'black' }}>{Item.properties.place}</Text>
            <Text style={{ fontSize: 25,color:'black' }}>{Item.properties.mag}</Text>
            <Text style={{ fontSize: 25,color:'black' }}>{Item.properties.tsunami}</Text>
            <Text style={{ fontSize: 25,color:'black' }}>{Item.geometry.coordinates}</Text>
        </View>
        </View>
    )
}


export default Earthquakemain;