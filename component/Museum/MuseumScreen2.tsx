import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import fetchDatafromAPI_2 from '../../hooks/Museum/Museum2API';
const MuseumScreen_2 = ({ route }) => {
    const { params } = route;
    const { Items } = params
    const { state } = fetchDatafromAPI_2(Items)
    return (
        <View style={{ alignSelf: 'center', }}>
            <Text>MuseumScreen_2</Text>
            <Text>Object ID: {Items}</Text>
            <Image style={{ height: 200, width: 200, borderWidth: 2, borderColor: '#000', resizeMode: 'contain' }} source={{ uri: state.post.primaryImage }} />
            <Text>Accesion Year: {state.post.accessionYear}</Text>
            <Text>Department: {state.post.department}</Text>
            <Text>Object Name: {state.post.objectName}</Text>
        </View>
    )
}

export default MuseumScreen_2

const styles = StyleSheet.create({})