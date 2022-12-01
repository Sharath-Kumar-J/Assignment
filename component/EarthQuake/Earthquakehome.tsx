import { StyleSheet, TouchableOpacity, ActivityIndicator, Text, View, FlatList } from 'react-native'
import React, { } from 'react'
import EarthquakeAPIdata from '../../hooks/EarthQuake/Earthquakeapidata';

const Earthquakehome = ({ navigation }) => {
    const { state } = EarthquakeAPIdata();
    const renderEarthquakeItemAPI = ({ item }) => {
        return (

            <View style = {{ backgroundColor:"#d3d3d3"}}>
                <View style={{padding:10,margin:10,borderWidth:1,backgroundColor:"#ffffe0"}}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate("Earthquakemain", { Item: item }); }}
                    >
                        <Text style={{ fontSize: 15, color: 'black', alignContent: 'space-around' }}>
                            {item.properties.title}

                        </Text>
                        <Text style={{ fontSize: 15, color: 'black', alignContent: 'space-around' }}>
                            {item.properties.mag}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
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
        <View>

            <View>
                <FlatList
                    data={state.post.features}
                    renderItem={renderEarthquakeItemAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
export default Earthquakehome;

const styles = StyleSheet.create({})