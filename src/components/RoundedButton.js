import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { ActiveOpacity } from '../utils/Statics' 

const RoundedButton = props => {
    return (
        <TouchableOpacity 
            disabled={props.disabled}
            activeOpacity={ActiveOpacity}
            style={{
                ...styles.button, 
                ...props.buttonStyle,
                ...props.disabled ? styles.disabled : styles.enabled
            }}
            onPress={props.onPress != null ? props.onPress.bind(this) : null}>
            <Text style={props.textStyle} numberOfLines={1} adjustsFontSizeToFit={true}>
                {props.textAllCaps ?
                props.title.toUpperCase() :
                props.title}
            </Text>
        </TouchableOpacity>
      )
}

RoundedButton.defaultProps = {
    disabled: false,
    onPress: null,
    textAllCaps: false
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    enabled: {},
    disabled: {
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    }
})

export default RoundedButton