import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Colors from '../utils/Colors'

const LoadingView = props => {
    return(
        <View style={{...styles.containerLoading, top: props.marginTop}}>
            <Text style={styles.textLoading}>Loading...</Text>
        </View>
    )
}

LoadingView.defaultProps = {
    marginTop: 0
}

const styles = StyleSheet.create({
    containerLoading: {
        position: "absolute",
        top: 0,
        start: 0,
        end: 0,
        bottom: 0,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: Colors.translucentBlack
    },
    textLoading: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default LoadingView