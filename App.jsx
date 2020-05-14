import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';

import store from './src/store/store'

import Home from './src/views/Home'
import Detail from './src/views/Detail'
import Profile from './src/views/Profile'

const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
    screenOptions={({ route }) => (
      {
        headerShown: route.name === 'Detail' ? true : false
      }
    )}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    screenOptions={({ route }) => (
      {
        headerShown: route.name === 'Detail' ? true : false
      }
    )}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Detail" component={Detail} />
    </ProfileStack.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => (
            {
              tabBarIcon: () => {
                if (route.name === 'Home') return <FontAwesome name="home" size={24} color='#F4F4F4' />
                else if (route.name === 'Profile') return <FontAwesome name="user" size={24} color='#F4F4F4' />
              }
            }
          )}
          tabBarOptions={{
            style: {
              backgroundColor: '#FF7314',
            },
            activeTintColor: '#F4F4F4',
            inactiveTintColor: '#F4F4F4',
          }}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F4F4',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
