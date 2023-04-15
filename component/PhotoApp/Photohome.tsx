import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { initailState, PhotoReducers } from '../../hooks/PhotoApp/PhotoReducer';
import { UseAPIPhotos } from '../../hooks/PhotoApp/PhotoAPIdata';

const Photohome = ({ navigation }) => {
  const [state, dispatch] = useReducer(PhotoReducers, initailState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      var data = await UseAPIPhotos(page);
      if (data !== "error") {
        dispatch({ type: "FETCH", payload: data });
      } else {
        dispatch({ type: "FETCH_ERROR" });
      }
    }
    getData();
  }, [page]);//


  const renderItem = ({ item }) => {
    console.log(item.id);
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => { navigation.navigate("Photomain", { Item: item }) }}>
          <Image style={{ height: 60, margin: 10, width: 60, resizeMode: 'contain' }}
            source={{ uri: item.url }}

          />
          <View style={{ flexDirection: 'row', paddingLeft: 70, }}>
            <Text style={{ fontSize: 15, paddingLeft: 10, fontWeight: 'bold', color: 'black' }}>{item.id}</Text>
            <Text style={{ fontSize: 15, paddingLeft: 10, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  const renderFooter = () => {

    if (!state?.loading) return null;
    return (
      <ActivityIndicator
        color='black'
        size={50}
      />
    );
  };

  const handleLoadMore = () => {
    if (!state?.loading) {
      dispatch({ type: "LOADING" });
      setPage(page + 1);

    }
  };

  return (
    <View style={styles.FlatList}>
      <FlatList
        data={state?.photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.0}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  item: {

    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ffb6c1',
    flexDirection: 'row',
  },
});


export default Photohome;