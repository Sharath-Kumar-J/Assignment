import { StyleSheet, TextInput, Text, FlatList, Button, Image, View } from 'react-native'
import React, { useState } from 'react'
import CoronaAPIdata from '../../hooks/Corona/CoronaAPI'

const Coronamain = () => {
    const { state } = CoronaAPIdata()
    const [search, setSearch] = useState('')
    const rendercoronaAPI = ({ item }) => {

        if (item.id == (search)) {
            return (
                <View >
                    <View style={{ margin : 10,borderRadius:10 ,backgroundColor: "#87cefa" }}>
                        <View style={{ borderWidth: 1, margin: 10, alignItems: 'center', padding: 20, }}>
                            <Image style={{ height: 90, width: 90, resizeMode: 'contain', }}
                                source={{ uri: item.url }}
                            />
                            <Text style={{ fontSize: 25, color: 'black', }}>
                                {item.id}
                            </Text>
                            <Text style={{ fontSize: 25, color: 'blue', }}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

    return (
        <View style = {{flex:1, backgroundColor:"#90ee90"}}>
            <View style={{ margin: 10, borderWidth: 1, borderRadius: 20, }}>
                <TextInput
                    placeholder='Enter country'
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            <View style={{ paddingLeft: 110, paddingRight: 110, }}>
                <Button
                    title='search'
                />
            </View>
            <View>
                <FlatList
                    data={state.post.slice(0, 100)}
                    renderItem={rendercoronaAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Coronamain;

const styles = StyleSheet.create({})