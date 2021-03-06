import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Platform, Keyboard, Dimensions } from 'react-native'

import { IconSearch } from '../utils/repo/local/SvgRequestManager'
import { ActiveOpacityDashboardMenu } from '../utils/Statics' 
import Colors from '../utils/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const AutoCompleteBox = props => {
    const inputRef = useRef(null)

    const [query, setQuery] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        
    }, [query])

    const clearInput = () => {
        setQuery("")
        inputRef.current.focus()
    }

    const handlerOnFocusInput = () => {
        setIsFocused(true)
    }

    const onSelectedItem = value => {
        Keyboard.dismiss()
        props.onSelectedItem(value)
        setQuery(value)
        setIsFocused(false)
    }

    return (
        <View style={Platform.OS === "ios" ? styles.container : {}}>

            <View style={{...styles.containerInput, ...props.containerStyle}}>
                <IconSearch style={styles.iconSearch} />
                <TextInput
                    ref={inputRef}
                    onFocus={handlerOnFocusInput}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.grey}
                    value={query}
                    onChangeText={query => setQuery(query)}
                    underlineColorAndroid="white"
                    style={styles.inputText}/>  
                {query.length > 0 && 
                <TouchableOpacity activeOpacity={ActiveOpacityDashboardMenu}  
                    onPress={clearInput}>
                    <Text style={styles.textClose}>X</Text>
                </TouchableOpacity>}
            </View>

            {isFocused && props.data &&
                <View style={styles.containerResult}>
                    <ScrollView keyboardShouldPersistTaps="always">
                        {props.data.map( value => {
                            if(value.toLowerCase().includes(query.toLowerCase())) { 
                                return (
                                    <TouchableOpacity 
                                        key={value}
                                        onPress={onSelectedItem.bind(this, value)}>
                                        <Text style={styles.textItem}>{value}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </ScrollView>
                </View>
            }

        </View>
    )       
}

AutoCompleteBox.defauldProps={
    containerStyle: {},
    data: [],
    onSelectedItem: () => {}
}

const styles = StyleSheet.create({
    container:{
        zIndex: 2
    },
    containerInput: {
        flexDirection: "row",
        marginHorizontal: 16,
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: Colors.primaryPurple,
        borderWidth: 1,
        borderRadius: 4,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.15,
        elevation: 3,
    },
    iconSearch: {
        marginEnd: 4,
        marginStart: 8,
    },
    inputText: {
        flexGrow: 1,
        flexShrink: 1,
        paddingVertical: 14,
        color: Colors.lightBlack,
        fontSize: 16,
    },
    textClose: {
        padding: 12,
        color: Colors.primaryPurple,
        fontWeight: "bold",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        elevation: 5,
        fontSize: 18
    },
    containerResult: {
        position: "absolute",
        alignSelf: "baseline",
        width: Dimensions.get("window").width - 32,
        maxHeight: Dimensions.get("window").height * .5 ,
        marginTop: Platform.OS == "android" ? 68 : 66,
        marginHorizontal: 16,
        padding: 8,
        borderRadius: 4,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        elevation: 2,
        zIndex: 3
    },
    textItem: {
        paddingVertical: 8,
        fontSize: 16
    }
})

export default AutoCompleteBox