import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { Header } from 'react-native-elements'

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
    // screenOptions={({ route }) => (
    //   {
    //     headerShown: route.name === 'Detail' ? true : false
    //   }
    // )}
    screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
    // screenOptions={({ route }) => (
    //   {
    //     headerShown: route.name === 'Detail' ? true : false
    //   }
    // )}
    screenOptions={{ headerShown: false }}
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
          <Header backgroundColor="#393534" centerComponent={{ text: 'MY TITLE', style: { color: '#fff', } }} />
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
