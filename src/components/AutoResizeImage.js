import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const AutoResizeImage = props => {
    return (
        <View style={{...styles.imageContainer, ...props.containerStyle}} >
            <Image style={styles.image} 
                resizeMode={props.resizeMode}
                source={props.source}/>
        </View>
    )
}

AutoResizeImage.defaultProps = {
    containerStyle: {},
    resizeMode: "cover"
}

const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: Colors.lightGrey,
    },
    image: {
        flex: 1,
        width: undefined, 
        height: undefined,
    },
})

export default AutoResizeImage