import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

import StatusBar from '../components/StatusBar'
import Toolbar from '../components/ToolbarBackText'

import Colors from '../utils/Colors'

const WebViewScreen = ({ route, navigation }) =>{
    const { title, link } = route.params

    const handlerBackPressed = () => { navigation.popToTop() }

    return(
        <View style={styles.screen}>

            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Toolbar onBackPressed={handlerBackPressed} 
                title={title}
                color={Colors.primaryPurple}
                childColor="white"/>

            <WebView style={styles.webview} source={{ uri: link }} />

        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    webview: {
        marginTop: -56
    }
})

export default WebViewScreen