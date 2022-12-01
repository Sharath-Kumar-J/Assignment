import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PhotoScreen2 = ({ route }) => {
    const { params } = route
    const { Item } = params
    return (
        <View style={{ borderWidth: 1, alignSelf: 'center', alignContent: 'center' }}>
            <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} source={{ uri: Item.url }} />
            <Text>{Item.id}</Text>
            <Text>{Item.title}</Text>

        </View>
    )
}

export default PhotoScreen2;

const styles = StyleSheet.create({})