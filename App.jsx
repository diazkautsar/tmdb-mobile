import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
// import { FontAwesome5 } from '@expo/vector-icons';

import store from './src/store/store'
import Home from './src/views/Home'
import Detail from './src/views/Detail'
import Profile from './src/views/Profile'
import List from './src/views/List'

import SearchBar from './src/components/SearchBarHeader'

const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tab = createBottomTabNavigator()

// const handleTouch = () => {
//   console.log('OKEEE')
// }

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ 
          header: () => <SearchBar />
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={{ header: () => <SearchBar /> }}
      />
      <HomeStack.Screen 
        name="List" 
        component={List} 
        options={{
          headerStyle: {backgroundColor: "#393534"} 
        }} 
      />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
      name="Profile" 
      component={Profile} 
      options={{ header: () => <SearchBar /> }}
      />
      <ProfileStack.Screen 
      name="Detail" 
      component={Detail} 
      options={{ header: () => <SearchBar /> }}
      />
      <ProfileStack.Screen name="List" component={List} options={{ headerStyle: {backgroundColor: "#393534"} }} />
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
              },
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
          <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          // options={{
          //   tabBarAccessibilityLabel: () => {
          //     console.log('masuuukkk pak ekooooo')
          //   },
          // }}
          />
          <Tab.Screen name="Profile" component={ProfileStackScreen} 
          // options={{
          //   tabBarAccessibilityLabel: () => {
          //     console.log('masuuukkk pak ekooooo')
          //   },
          // }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
