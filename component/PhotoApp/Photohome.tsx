import React,{useReducer,useEffect,useState} from 'react';
import { View, Text, StyleSheet, FlatList,ActivityIndicator,Image, TouchableOpacity } from 'react-native';
import { initailState, PhotoReducers } from '../../hooks/PhotoApp/PhotoReducer';
import { UseAPIPhotos } from '../../hooks/PhotoApp/PhotoAPIdata';

const Photohome = ({ navigation}) => {// created the function
    const [state,dispatch]=useReducer(PhotoReducers,initailState);
    const [page,setPage]=useState(1);//first it has to show 1 page which has 10 data

    useEffect(()=>{//1 tym data call madodakke we have used useEffect
        const getData=async()=>{//data will be anyhow return
            var data =await UseAPIPhotos(page);//untill data come it should be wait
            if(data!=="error"){
                dispatch({type:"FETCH",payload:data});// if data is not equal to error then it will trigger the action to load the data
            }else{
            dispatch({type:"FETCH_ERROR"});//else error
            }
        }
        getData();
    },[page]);//


    const renderItem=({item})=>{
        console.log(item.id);
        return(
        <View style={styles.item}>
          <TouchableOpacity
           onPress={() => {navigation.navigate("Photomain",{Item:item})}}>
          <Image  style={{height: 60, width: 60, resizeMode: 'contain'}}
            source={{uri: item.url}}
           
          />
          <View style = {{ flexDirection: 'row',paddingLeft:70,}}>
            <Text style = {{ fontSize:15,fontWeight:'bold',color:'black'}}>{item.id}</Text>
            <Text style = {{ fontSize:15,paddingLeft:10,fontWeight:'bold',color:'black'}}>{item.title}</Text>
          </View>
          </TouchableOpacity>
        </View>
        );
    }

    const renderFooter = () => {
        
         if (!state?.loading) return null;//? = optional property if state is not loading just leave it as null
         return (
           <ActivityIndicator// if orelse state load agthidde andre indicator aku
           color='black'
           size={50}
           />
         );
       };

    const  handleLoadMore = () => {
        if (!state?.loading) {
            dispatch({type:"LOADING"}); // the data is ended at the bottom the instructed to load more.
          setPage(page + 1); 
           
        }
      };

    return (
        <View style={styles.FlatList}>
            <FlatList
            data={state?.photos}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            ListFooterComponent={renderFooter}//it is same as loading
            onEndReachedThreshold={0.0}//syntax when it reaches thebottom of the line
            onEndReached={handleLoadMore}//end reach adaga next load agu
            />
        </View>
    );
};


const styles = StyleSheet.create({
    FlatList: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    item: {
        marginRight:1,
        borderWidth:1,
        borderColor:'black',
        backgroundColor: '#ffb6c1',
        flexDirection: 'row',
      },
});


export default Photohome;