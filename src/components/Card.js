import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={[
            styles.card, 
            props.style, 
            {borderRadius: props.radius, padding: props.padding}]}>
            <View style={{overflow: props.hiddenOverflow ? "hidden" : "visible", borderRadius: props.radius}}>
                {props.children}
            </View>
        </View>
    )
}

Card.defaultProps = {
    hiddenOverflow: false,
    radius: 10,
    padding: 8
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.15,
        elevation: 4,
        backgroundColor: "white",
        borderRadius: 10
    }
})

export default Card