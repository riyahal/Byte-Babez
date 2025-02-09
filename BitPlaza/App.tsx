// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import RenderHtml from 'react-native-render-html';

import TitleScreen from './TitleScreen';
import UserSignUp from './UserSignUp';
import HomePage from './Homepage';
import UserProfile from './UserProfile';
import AllCourses from './AllCourses';
import MyCourses from './MyCourses';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TitleScreen" component={TitleScreen}/>
        <Stack.Screen name="UserSignUp" component={UserSignUp}/>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="AllCourses" component={AllCourses}/>
        <Stack.Screen name="MyCourses" component={MyCourses}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
