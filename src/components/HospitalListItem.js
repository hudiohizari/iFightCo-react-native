import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native'

import { IconHospital } from '../utils/repo/local/SvgRequestManager'
import { ActiveOpacity } from '../utils/Statics'
import Colors from '../utils/Colors'
import Strings from '../utils/Strings'

const HospitalListItem = props => {

    return (
        <TouchableOpacity 
            activeOpacity={ActiveOpacity} 
            onPress={ props.onSelectedItem.bind(this, props.object) }>

            <View style={styles.container}>
                <IconHospital size={Dimensions.get("window").width * 0.2}/>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>
                        {props.object.name}
                    </Text>
                    <Text style={styles.textAddress}>
                        {props.object.address}
                    </Text>
                    <Text style={styles.textDistance}>
                        {Strings.labelJarakDariTempatmu} {props.object.distance} Km
                    </Text>
                </View>
            </View>
            <View style={styles.line} />

        </TouchableOpacity>
    )
}

HospitalListItem.defaultProps = {
    onSelectedItem: () => {}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },  
    containerText: {
        flex: 1,
        justifyContent: "center",
        marginStart: 12,
    },
    textName: {
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold",
    }, 
    textAddress: {
        marginTop: 4,
        color: Colors.grey,
        fontSize: 12,
    },
    textDistance: {
        marginTop: 4,
        color: Colors.primaryPurple,
        fontSize: 12,
    }, 
    line: {
        flex: 1,
        height: 1,
        marginHorizontal: 16,
        backgroundColor: Colors.lightGrey
    }
})

export default HospitalListItem
