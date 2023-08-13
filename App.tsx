import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Settings from './components/Settings';
import Libarary from './components/Libarary';
import Search from './components/Search';




const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
     
    <Tab.Navigator
    initialRouteName='home'
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'white',
      tabBarStyle:{
        backgroundColor:'black'
      },
    }}
    >

      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({focused})=>{
          return(
            <Image source={require('./components/images/home.png')}
            style={{tintColor:focused ? 'white' : 'grey', width:20, height:20}}
            />
          )
        }
      }}/> 

      <Tab.Screen name='Search' component={Search} 
      options={{
        tabBarIcon: ({focused})=>{
          return(
            <Image source={require('./components/images/magnifying-glass.png')}
            style={{tintColor:focused ? 'white' : 'grey', width:20, height:20}}
            />
          )
        }
      }}
      />
      <Tab.Screen name='Library' component={Libarary}
      options={{
        tabBarIcon: ({focused})=>{
          return(
            <Image source={require('./components/images/library.png')}
            style={{tintColor:focused ? 'white' : 'grey', width:20, height:20}}
            />
          )
        }
      }}
       />
      <Tab.Screen name="Premium" component={Settings}
      options={{
        tabBarIcon: ({focused})=>{
          return(
            <Image source={require('./components/images/spotify.png')}
            style={{tintColor:focused ? 'white' : 'grey', width:20, height:20}}
            />
          )
        }
      }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})