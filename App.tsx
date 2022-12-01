import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainsrn from './component/Homescreen/Main';
import Homescreen from './component/Airlines/Airlines';
import searchscreen from './component/SearchID/SearchID';
import Display from './component/SearchID/Display';
import MuseumScreen1 from './component/Museum/MuseumScreen1';
import MuseumScreen_2 from './component/Museum/MuseumScreen2';
import Earthhome from './component/EarthQuake/Earthquakehome';
import Earthmain from './component/EarthQuake/Earthquakemain';
import Main from './component/Corona/Main';
import Photohome from './component/PhotoApp/Photohome';
import Photomain from './component/PhotoApp/Photomain';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}>
      <Stack.Screen name = "MainScreen" component = {Mainsrn}/>
      <Stack.Screen name = "HomeScreen" component = {Homescreen}/>
      <Stack.Screen name = "Searchscreen" component = {searchscreen}/>
      <Stack.Screen name = "Displayscreen" component = {Display}/>
      <Stack.Screen name = "Museumscreen1" component = {MuseumScreen1}/>
      <Stack.Screen name = "Museumscreen2" component = {MuseumScreen_2}/>
      <Stack.Screen name = "Earthquakehome" component = {Earthhome}/>
      <Stack.Screen name = "Earthquakemain" component = {Earthmain}/>
      <Stack.Screen name = "Coronamain" component = {Main}/>
      <Stack.Screen name = "Photohome" component = {Photohome}/>
      <Stack.Screen name = "Photomain" component = {Photomain}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default App;
