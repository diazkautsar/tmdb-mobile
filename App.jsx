import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import store from './src/store/store'
import Home from './src/views/Home'
import Detail from './src/views/Detail'
import Favorite from './src/views/Favorite'
import List from './src/views/List'

import SearchBar from './src/components/SearchBarHeader'

const HomeStack = createStackNavigator()
const FavoriteStack = createStackNavigator()
const Tab = createBottomTabNavigator()

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
          headerStyle: { backgroundColor: "#393534" }
        }}
      />
    </HomeStack.Navigator>
  )
}

const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerStyle: { backgroundColor: "#393534" } }}
      />
      <FavoriteStack.Screen
        name="Detail"
        component={Detail}
        options={{ header: () => <SearchBar /> }}
      />
      <FavoriteStack.Screen name="List" component={List} options={{ headerStyle: { backgroundColor: "#393534" } }} />
    </FavoriteStack.Navigator>
  )
}

console.disableYellowBox = true

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => (
            {
              tabBarIcon: () => {
                if (route.name === 'Home') return <FontAwesome name="home" size={24} color='#F4F4F4' />
                else if (route.name === 'Favorite') return <FontAwesome name="heart" size={24} color='#F4F4F4' />
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
          />
          <Tab.Screen
            name="Favorite"
            component={FavoriteStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
