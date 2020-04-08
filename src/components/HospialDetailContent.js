import React from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native'
import openMap from 'react-native-open-maps'

import RoundedButton from './RoundedButton'

import { IconHospital } from '../utils/repo/local/SvgRequestManager'
import Colors from '../utils/Colors'
import Strings from '../utils/Strings'

const HospialDetailContent = props => {

    const handlerOnNavigationPressed = () => {
        let query = `${props.hospital?.lat},${props.hospital?.lng}`
        openMap({ query, provider: "google" })
    }

    const handlerOnCallPressed = () => {
        Linking.openURL(Platform.OS === "ios" ? `tel://${props.hospital?.telephone}` : `tel:${props.hospital?.telephone}`)
    }

    return(
        <SafeAreaView style={styles.parent}>
            <IconHospital style={styles.iconHospital}
                size={Dimensions.get("window").width * .35}/>
            <Text style={styles.textTitle}>
                {props.hospital?.name}
            </Text>
            <Text style={styles.textAddress}>
                {props.hospital?.address}
            </Text>
            <Text style={styles.textDistance}>
                {Strings.labelJarakDariTempatmu + props.hospital?.distance} Km
            </Text>
            <RoundedButton 
                title={Strings.labelDapatkanPetunjukArah} 
                buttonStyle={styles.containertNavigation}
                textStyle={styles.textNavigation}
                textColor={Colors.primaryPurple}
                onPress={handlerOnNavigationPressed}/>
            <TouchableOpacity style={styles.containerCall}
                onPress={handlerOnCallPressed}>
                <Text style={styles.textCall}>
                    {props.hospital?.telephone}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
    },
    iconHospital: {
        marginTop: 32,
        alignSelf: "center"
    },
    textTitle: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold"
    },
    textAddress: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.grey,
    },
    textDistance: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.primaryPurple,
        fontWeight: "bold"
    },
    containertNavigation:{
        marginTop: 16,
        marginHorizontal: 16,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.lightGrey,
    },
    textNavigation: {
        color: Colors.primaryPurple,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    },
    containerCall:{
        marginTop: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: Colors.primaryPurple
    },
    textCall: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default HospialDetailContent