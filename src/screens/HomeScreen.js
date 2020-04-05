import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

import { IconVirus, IconRecover, IconTombstone } from '../utils/repo/local/SvgRequestManager'

import Colors from '../utils/Colors'
import Strings from '../utils/Strings'

const HomeScreen = () => {
    const [lastUpdated, setLastUpdated] = useState("Terakhir diperbarui: -")
    const [positive, setPositive] = useState(0)
    const [recover, setRecover] = useState(0)
    const [death, setDeath] = useState(0)

    return (
        <View style={styles.screen}>

            <Text style={styles.header}>
                {Strings.labelWelcomeStart}
                <Text style={styles.textRed}>{Strings.labelWelcomeRed}</Text>
                {Strings.labelWelcomeEnd}
            </Text>

            <MapView style={styles.mapStyle}
                provider={MapView.PROVIDER_GOOGLE} />

            <Text style={styles.textLastUpdate}>{lastUpdated}</Text>

            <Text style={styles.textRatio}>
                {Strings.labelRasioStart}
                <Text style={styles.textRed}>{Strings.labelRasioRed}</Text>
            </Text>

            <View style={styles.containerRatio}>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconVirus />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelPositif}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.primaryPurple}}>
                        {positive}
                        </Text>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={styles.textRatioLabel}>
                        {Strings.labelKasus}
                    </Text>
                </View>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconRecover />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelSembuh}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.blue}}>
                        {recover}
                        </Text>
                    <Text style={styles.textRatioLabel}>{Strings.labelKasus}</Text>
                </View>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconTombstone />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelMeninggal}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.red}}>
                        {death}
                    </Text>
                    <Text style={styles.textRatioLabel}>{Strings.labelKasus}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
    },
    textRed: {
        color: Colors.red,
    },
    mapStyle: {
        width: Dimensions.get('window').width - 32,
        aspectRatio: 2,
        marginTop: 16,
        marginHorizontal: 16,
    },
    textLastUpdate: {
        marginTop: 4,
        marginHorizontal: 16,
        color: Colors.grey,
        fontSize: 10,
        fontWeight: "bold",
    },
    textRatio: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold",
    },
    containerRatio: {
        flexDirection: "row",
        marginTop: 16,
        paddingHorizontal: 12
    },
    containerRatioItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 4,
        marginHorizontal: 4,
        padding: 8,
    },
    containerRatioItemHeader: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRatioHeader: {
        flex: 1,
        marginStart: 4,
        color: Colors.lightBlack,
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
    textRatioNumber: {
        marginTop: 4,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    }, 
    textRatioLabel: {
        color: Colors.grey,
        fontSize: 12,
        textAlign: "center",
    }
})

export default HomeScreen