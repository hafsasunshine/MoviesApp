import * as React from 'react';
import 'react-native-gesture-handler';
import  { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { FontAwesome } from '@expo/vector-icons';

import Constants from './Component/Constants';
import Search from './Component/Search';
import Tendances from './Component/Tendances';
import FilmDetail from './Component/FilmDetail';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name="Recherche" component={HomeStack} 
         options={{ tabBarIcon: ({ color, size }) => (
        <FontAwesome name="home" size={size} color={color} />)}}
         />

        <Tab.Screen name='Tendances' component={Tendances} 
        options={{tabBarIcon: ({ color, size }) => (
        <FontAwesome name="heart" size={size} color={color} />)}} 
        />
      </Tab.Navigator>
      </NavigationContainer>
 );}};



const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {color: Constants.textColor},
  headerLeft: () => <Icon name="menu" size={34} color={Constants.textColor} />,
  headerRight: () => (
    <Icon name="search" size={25} color={Constants.textColor} />
  ),
};
function HomeStack() {
   
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Movie" component={Search}  />
    <Stack.Screen name="Detail" component={FilmDetail} />
    <Stack.Screen name="Favoris" component={Tendances} options={headerStyle}/>
  </Stack.Navigator>
  )
};

export default App;