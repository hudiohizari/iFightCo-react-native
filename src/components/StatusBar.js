import React from 'react'
import { Platform, View, StyleSheet, StatusBar as DefaultStatusBar } from 'react-native'
import Constants from 'expo-constants'

const StatusBar = props => {
    return (
        <View style={{...styles.statusBar, backgroundColor: props.color}}>
            <DefaultStatusBar barStyle={
                    (props.isLight == true ? "light-content" : "dark-content") 
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS == "ios" ? Constants.statusBarHeight : 0,
    }
})

export default StatusBar