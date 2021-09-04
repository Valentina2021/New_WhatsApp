import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { View } from '../components/Themed';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import { RootStackParamList, MainTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarIndicator } from 'react-native-tab-view';
import { Entypo } from '@expo/vector-icons'; 

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<MainTabParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.tint,
        
      },
      headerTintColor: Colors.light.background,
      headerTitleStyle:{
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title: "WhatsApp",
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 60, 
            justifyContent: 'space-between',
            marginRight: 10, 
            backgroundColor: Colors.light.tint }}>
            <Octicons name="search" size={22} color={'white'} style={{backgroundColor: Colors.light.tint}}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} style={{backgroundColor: Colors.light.tint}}/>
          </View>
        )
      }}/>
      
      
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {backgroundColor: Colors[colorScheme].tint},
        tabBarIndicatorStyle:{
          backgroundColor: Colors[colorScheme].background,
          height: 3,
        },
        tabBarLabelStyle:{
          fontWeight: 'bold',
        },
        tabBarShowIcon: true,

      }}>
      <MainTab.Screen
        name="Camera"
        component={ChatScreen}
        options={{
          tabBarIcon: ({tintColor}) => <Entypo name="camera" color={"#fff"} size={22}/>,
          tabBarLabel: () => null,
          
        }}

      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
        
      />
       <MainTab.Screen
        name="Status"
        component={ChatScreen}
      
      />
       <MainTab.Screen
        name="Calls"
        component={ChatScreen}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
