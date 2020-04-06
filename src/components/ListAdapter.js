import React from 'react'
import { StyleSheet, FlatList, RefreshControl, Text } from 'react-native'

import Colors from '../utils/Colors'
import Strings from '../utils/Strings'

const ListAdapter = props => {

    const loadingAnimation = () => {
        if(!props.isLoadingMore) {
            return <Text style={{alignSelf:"center", margin: 16, color: props.onEndReachedTextColor}}>
                {props.onEndReachedText}
            </Text>
        }
        else { 
            return <Text style={{alignSelf:"center", margin: 16, color: props.onEndReachedTextColor}}>
                Loading
            </Text>
        }
    }

    return (
        <FlatList 
            style={{...styles.container, paddingTop: props.containerPaddingVertical}}
            contentContainerStyle={{paddingBottom: props.containerPaddingVertical}}
            refreshControl={
                <RefreshControl 
                    refreshing={props.refreshing}
                    onRefresh={props.onRefresh}
                    tintColor={props.refreshColor}/>
            }
            data={props.data}
            extraData={props}
            numColumns={props.numColumns}
            renderItem={ (itemData) => props.renderItem(itemData) }
            keyExtractor={props.key}
            onEndReached={props.onEndReached.bind(this)}
            onEndReachedThreshold={0.8}
            ListFooterComponent={loadingAnimation}/>
    )
}

ListAdapter.defaultProps = {
    containerPaddingVertical: 8,
    refreshing: false,
    refreshColor: "black",
    onRefresh: () => {},
    numColumns: 1,
    key: (item) => item.uuid,
    onEndReached: () => {},
    onEndReachedText: Strings.labelNoMoreItem,
    onEndReachedTextColor: Colors.darkGrey
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingBottom: 8,
    },
    containerColum:{
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 16,
        paddingBottom: 8
    }
})

export default ListAdapter
