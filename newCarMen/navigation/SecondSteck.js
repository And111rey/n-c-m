import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from "../screens/userScreens/Main"
import { SettingsScreen } from '../screens/userScreens/SettingsScreen'
import { ControlScreen } from "../screens/userScreens/ContsrolScreen"
import { SteckLogSign } from './AppSteck';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const ScreenTabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{style: {backgroundColor: '#545252'}}}>
            
            <Tab.Screen name="Main" component={MainScreen}  options={{ tabBarIcon: ({focused})=><Ionicons name="md-car" color={focused? "#949fd1": "black"} size={focused? 50: 32} /> }} />
            
            <Tab.Screen
                name="Setting"
                component={SettingsScreen}
                options={{ tabBarIcon: ({focused})=><Ionicons name="logo-game-controller-b" color={focused? "#949fd1": "black"} size={focused? 50: 32} /> }} />
        </Tab.Navigator>
    )
}


export const TabSecondSteck = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Teg" component={ScreenTabs}/>
                <Stack.Screen name="Control" component={ControlScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

} 