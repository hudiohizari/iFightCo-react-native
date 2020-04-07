import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import StatusBar from '../../components/StatusBar'
import Toolbar from '../../components/ToolbarBackText'
import AutoCompleteBox from '../../components/AutoCompleteBox'

import Colors from '../../utils/Colors'
import Strings from '../../utils/Strings'

const WebViewScreen = ({ route, navigation }) =>{
    const { provinces } = route.params

    const handlerBackPressed = () => { navigation.popToTop() }

    const handlerSelectedProvince = (value) => {
        console.log(value)
    }

    return(
        <View style={styles.screen}>

            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Toolbar onBackPressed={handlerBackPressed} 
                title={Strings.labelRsRujukan}
                color="white"
                childColor={Colors.primaryPurple}/>

            <AutoCompleteBox containerStyle={styles.inputReference}
                placeholder={Strings.labelCariProvinsi}
                data={provinces.map(province => ( province.province ))}
                onSelectedItem={handlerSelectedProvince}/>

            <Text style={styles.textHeader}>
                {Strings.labelRujukanHeader}
            </Text>

            <Text style={styles.textCaption}>
                {Strings.labelRujukanCaption}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    inputReference: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        zIndex: 2,
    },
    textHeader: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold"
    },
    textCaption: {
        marginHorizontal: 16,
        color: Colors.grey,
    }
})

export default WebViewScreen