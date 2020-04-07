import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

import StatusBar, { statusBarHeight } from '../../components/StatusBar'
import Toolbar, { toolbarHeight } from '../../components/ToolbarBackText'
import LoadingView from '../../components/LoadingView'

import Colors from '../../utils/Colors'
import CommonUtils from '../../utils/CommonUtils'

const WebViewScreen = ({ route, navigation }) =>{
    const { title, link } = route.params

    const [isLoading, setIstLoading] = useState(true)

    const handlerBackPressed = () => { navigation.popToTop() }

    return(
        <View style={styles.screen}>

            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Toolbar onBackPressed={handlerBackPressed} 
                title={title}
                color="white"
                childColor={Colors.primaryPurple}/>

            <WebView style={styles.webview} 
                source={{ uri: link }} 
                onLoad={() => setIstLoading(false)}
                onError={() => { CommonUtils.showAlert("error", "Terjadi kesalahan", "Tidak dapat memuat halaman") }}/>

            {isLoading && <LoadingView marginTop={ statusBarHeight + toolbarHeight }/>}

        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    webview: {
        marginTop: -56
    },
})

export default WebViewScreen