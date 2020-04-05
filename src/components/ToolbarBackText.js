import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ActiveOpacity } from '../utils/Statics'

const ToolbarBackTextButton = props => {

    return (
        <View style={[styles.toolbar, {backgroundColor: props.color}]}>

            <View style={styles.backIcon}>
                <TouchableOpacity activeOpacity={ActiveOpacity} onPress={props.onBackPressed.bind(this)}>
                    <Ionicons name="ios-arrow-round-back" size={32} color={props.childColor} />
                </TouchableOpacity>
            </View>

            <Text style={[styles.textTitle, {color: props.childColor}]} numberOfLines={1} adjustsFontSizeToFit={true}>
                {props.title}
            </Text>
        </View>
    )
}

ToolbarBackTextButton.defaultProps = {
    color: "white",
    childColor: "black",
    buttonIcon: "ios"
}

const styles = StyleSheet.create({
    toolbar: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        elevation: 5,
        backgroundColor: "white",
        paddingHorizontal: 16,
    }, 
    backIcon: {
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
    },
    textTitle: {
        flexGrow: 1,
        flexShrink: 1,
        marginStart: 16,
        marginEnd: Platform.OS === "ios" ? 48 : 16,
        textAlign: Platform.OS === "ios" ? "center" : "auto",
        fontSize: 20,
    }
})

export default ToolbarBackTextButton