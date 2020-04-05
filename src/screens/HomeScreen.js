import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default HomeScreen