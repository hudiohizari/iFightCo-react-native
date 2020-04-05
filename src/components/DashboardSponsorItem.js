import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

import Card from './Card'

import { ActiveOpacityDashboardMenu } from '../utils/Statics' 

const DashboardSponsorItem = props => {
    const rootStyle = {...styles.root, flex: 1/props.column}

    return (
        <TouchableOpacity 
            style={rootStyle} 
            activeOpacity={ActiveOpacityDashboardMenu} 
            onPress={props.onSelected.bind(this, props.item)}>
            <Card style={styles.card}>
                <View style={styles.imageContainer} >
                    <Image style={styles.image} resizeMode="contain" source={props.item.img}/>
                </View>
            </Card>
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
        marginRight: 8
    },
    imageContainer: {
        width: "90%", 
        aspectRatio: 1
    },
    image: {
        flex:1, 
        width: undefined, 
        height: undefined
    },
    text: {
        fontSize: 8,
        textAlign: "center",
        marginTop: 4
    }
})

export default DashboardSponsorItem