import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import Card from './Card'

import { ActiveOpacityDashboardMenu } from '../utils/Statics' 
import Colors from '../utils/Colors'

const DashboardMenuItem = props => {
    const rootStyle = {...styles.root, flex: 1/props.column}

    return (
        <TouchableOpacity 
            style={rootStyle} 
            activeOpacity={ActiveOpacityDashboardMenu} 
            onPress={props.onSelected.bind(this, props.item)}>
            <Card style={styles.card}>
                <props.item.img height={56} height={28}/>
            </Card>
            <Text style={styles.text}>{props.item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: { },
    card: {
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginEnd: 4
    },
    text: {
        marginTop: 8,
        paddingStart: 4,
        paddingEnd: 12,
        color: Colors.lightBlack,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default DashboardMenuItem