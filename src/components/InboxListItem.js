import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import Image from '../components/AutoResizeImage'

import { ActiveOpacity } from '../utils/Statics'
import Colors from '../utils/Colors'

const InboxListItem = props => {

    return (
        <TouchableOpacity 
            activeOpacity={ActiveOpacity} 
            onPress={ props.onSelectedItem.bind(this, props.object) }>

            <View style={styles.container}>
                <Image containerStyle={styles.imageStyle} source={require("../assets/images/img_logo.png")}/>
                <View style={styles.containerText}>
                    <Text style={styles.textTitle}>
                        {props.object.title}
                    </Text>
                    <Text style={styles.textMessage}>
                        {props.object.message}
                    </Text>
                </View>
            </View>
            <View style={styles.line} />

        </TouchableOpacity>
    )
}

InboxListItem.defaultProps = {
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
    imageStyle: {
        width: "20%",
        aspectRatio: 1,
    }, 
    containerText: {
        flex: 1,
        justifyContent: "center",
        marginStart: 8,
    },
    textTitle: {
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold",
    }, 
    textMessage: {
        marginTop: 4,
        color: Colors.grey,
        fontSize: 12,
    }, 
    line: {
        flex: 1,
        height: 1,
        marginHorizontal: 16,
        backgroundColor: Colors.lightGrey
    }
})

export default InboxListItem
