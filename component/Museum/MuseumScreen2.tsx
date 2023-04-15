import {Text, Image, View } from 'react-native'
import React from 'react'
import fetchDatafromAPI_2 from '../../hooks/Museum/Museum2API';
const MuseumScreen_2 = ({ route }) => {
    const { params } = route;
    const { Items } = params
    const { state } = fetchDatafromAPI_2(Items)
    return (
        <View style={{ alignSelf: 'center', }}>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', }}>Details</Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', }}>ID: {Items}</Text>
            <Image style={{ alignSelf: 'center', height: 200, width: 200, borderWidth: 1, borderColor: '#000', resizeMode: 'contain', }} source={{ uri: state.post.primaryImage }} />
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', }}>Accesion Year: {state.post.accessionYear}</Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', }}>Department: {state.post.department}</Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', }}> Name: {state.post.objectName}</Text>
        </View>
    )
}

export default MuseumScreen_2
