import { Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import fetchDatafromAPI_1 from '../../hooks/Museum/Museum1API';

const MuseumScreen1 = ({ navigation }) => {
    const { state } = fetchDatafromAPI_1();

    if (state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#000000" />
            </View>

        )
    }
    if (state.error) {
        console.log(state.error)
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Museumscreen2", { Items: item })}>
                <View style={{ borderWidth: 2, borderRadius: 10, margin: 10, padding: 10, }} >
                    <Text style={{ color: 'black', fontSize: 15, }}>ID: {item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View style={{ margin: 2, flexDirection: 'column', }} >
                <FlatList
                    data={state.post.objectIDs.slice(0, 100)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    )
}

export default MuseumScreen1;