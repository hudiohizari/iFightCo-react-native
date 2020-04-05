import React from 'react'
import { Platform, View, StyleSheet, StatusBar as DefaultStatusBar } from 'react-native'
import Constants from 'expo-constants'

const StatusBar = props => {
    return (
        <View style={{...styles.statusBar, backgroundColor: Platform.OS == "android" ? "black" : props.color}}>
            <DefaultStatusBar barStyle={
                    Platform.OS == "ios" ? 
                    (props.isLight == true ? "light-content" : "dark-content") :
                    null
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
    }
})

export default StatusBar