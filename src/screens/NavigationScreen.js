import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './HomeScreen'
import InboxScreen from './InboxScreen'

import StatusBar from '../components/StatusBar'
import Colors  from '../utils/Colors'

const Tab = createBottomTabNavigator()

const NavigationScreen = () => {
    
    return (
        <View style={styles.screen}>
            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Tab.Navigator
                lazy={true}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === "Home") iconName = "ios-home"
                        else if (route.name === "Inbox") iconName = "ios-mail"

                        return ( <Ionicons name={iconName} size={size} color={color} />)
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.primaryPurple,
                    inactiveTintColor: Colors.grey,
                    showLabel: false
                }}>
                
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Inbox" component={InboxScreen} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default NavigationScreen
