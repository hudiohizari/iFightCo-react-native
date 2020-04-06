import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import ListAdapter from '../../components/ListAdapter'
import InboxListItem from '../../components/InboxListItem'

import SRM from '../../utils/repo/remote/ServerRequestManager'
import Colors from '../../utils/Colors'
import Strings from '../../utils/Strings'

const InboxScreen = () => {

    const [inboxList, setInboxList] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        if(isRefreshing) getInbox()
    }, [isRefreshing])

    const getInbox = () => {
        SRM.getInbox()
        .then(data => { 
            setInboxList(data.results)
            setIsRefreshing(false)
         })
        .catch(error => { setIsRefreshing(false) })
    }

    const handlerOnRefresh = () => {
        setIsRefreshing(true)
    }

    const getRenderItem = (itemData) => (
        <InboxListItem object={itemData.item}/>
    )

    return (
        <View style={styles.screen}>

            <ListAdapter containerPaddingVertical={0}
                data={inboxList}
                refreshing={false}
                onRefresh={handlerOnRefresh}
                refreshing={isRefreshing}
                refreshColor={Colors.lightBlack}
                renderItem={getRenderItem}
                // onEndReached={handlerOnEndReached}
                keyExtractor={(item) => item.times}
                onEndReachedText={Strings.labelTidakAdaPesanLagi}
                onEndReachedTextColor={Colors.grey}
                isLoadingMore={false}/>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    }
})

export default InboxScreen