import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import fetchDatafromAPI_1 from '../../hooks/Museum/Museum1API';

const MuseumScreen1 = ({ navigation }) => {
    const { state } = fetchDatafromAPI_1();

    // if (!state.loading) {
    //     console.log(state.post.objectIDs.slice(0, 10))
    // }
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
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Museumscreen2", { Items: item })}>
                <View style={{ borderWidth: 2, margin: 10, padding: 10, }} >
                    <Text>Object: {item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={{ fontSize: 20, padding: 10, }}>Museum Screen</Text>
            <View style={{ height: '90%', borderWidth: 2, margin: 10, flexDirection: 'column' }} >
                <FlatList
                    data={state.post.objectIDs.slice(0, 100)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* <TouchableOpacity>
                    <Text style={{ fontSize: 35 }}>{state.post.objectIDs.slice(0, 20)}</Text>
                </TouchableOpacity> */}
                {/* <Text>{state.post.metadata.title}</Text>
                <Text>{state.post.features[0].properties.mag}</Text> */}
            </View>
        </View>
    )


}

export default MuseumScreen1;