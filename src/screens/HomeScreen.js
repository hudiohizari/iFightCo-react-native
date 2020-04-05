import React, { useState } from 'react'
import { YellowBox, StyleSheet, Dimensions, ScrollView, View, Text, FlatList, Linking, Platform } from 'react-native'
import MapView from 'react-native-maps'

import { IconVirus, IconRecover, IconTombstone } from '../utils/repo/local/SvgRequestManager'
import DashboardMenuItem from '../components/DashboardMenuItem'
import DashboardSponsorItem from '../components/DashboardSponsorItem'

import Colors from '../utils/Colors'
import Strings from '../utils/Strings'
import { MenuList, SponsorList } from '../utils/Statics'
import CommonUtils from '../utils/CommonUtils'
import Keys from '../utils/Keys'
import { Constants } from 'react-native-unimodules'

const HomeScreen = () => {
    YellowBox.ignoreWarnings([ "VirtualizedLists should never be nested", /*TODO: Remove when fixed*/ ])

    const [lastUpdated, setLastUpdated] = useState("Terakhir diperbarui: -")
    const [positive, setPositive] = useState(0)
    const [recover, setRecover] = useState(0)
    const [death, setDeath] = useState(0)

    const handlerMenuSelected = item => {
        if(!item.isActive) CommonUtils.showAlert("info", `Menu ${item.title}`, "Is not ready yet")
        else {
            if(item.id === Keys.KEY_MENU_RS_RUJUKAN) {}
            else if(item.id === Keys.KEY_MENU_EDUKASI_COVID) {}
            else if(item.id === Keys.KEY_MENU_DIAGNOSA_MANDIRI) {}
            else if(item.id === Keys.KEY_MENU_DATA_INTERNASIONAL) {}
            else if(item.id === Keys.KEY_MENU_HOTLINE) {
                const url = Platform.OS === "ios" ? "tel://119" : "tel:119"
                Linking.openURL(url)
            }
            else if(item.id === Keys.KEY_MENU_INDONESIA_PEDULI) {}
            else if(item.id === Keys.KEY_MENU_LACAK_ODSODP) {}
            else if(item.id === Keys.KEY_MENU_GRAFIK_INDONESIA) {}
        }
    }

    const handlerSponsorSelected = item => {
        if(!item.isActive) CommonUtils.showAlert("info", `Menu ${item.title}`, "Is not ready yet")
        else {
            Linking.canOpenURL(item.link).then(supported => {
                if (supported) {
                  Linking.openURL(item.link);
                } else {
                  console.log("Don't know how to open URI: " + item.link);
                }
              });
        }
    }

    return (
        <ScrollView style={styles.screen}>

            <Text style={styles.header}>
                {Strings.labelWelcomeStart}
                <Text style={styles.textRed}>{Strings.labelWelcomeRed}</Text>
                {Strings.labelWelcomeEnd}
            </Text>

            <MapView style={styles.mapStyle}
                provider={MapView.PROVIDER_GOOGLE} />

            <Text style={styles.textLastUpdate}>{lastUpdated}</Text>

            <Text style={styles.textRatio}>
                {Strings.labelRasioStart}
                <Text style={styles.textRed}>{Strings.labelRasioRed}</Text>
            </Text>

            <View style={styles.containerRatio}>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconVirus />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelPositif}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.primaryPurple}}>
                        {positive}
                    </Text>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={styles.textRatioLabel}>
                        {Strings.labelKasus}
                    </Text>
                </View>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconRecover />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelSembuh}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.blue}}>
                        {recover}
                    </Text>
                    <Text style={styles.textRatioLabel}>{Strings.labelKasus}</Text>
                </View>
                <View style={styles.containerRatioItem}>
                    <View style={styles.containerRatioItemHeader}>
                        <IconTombstone />
                        <Text adjustsFontSizeToFit numberOfLines={1}
                            style={styles.textRatioHeader}>
                            {Strings.labelMeninggal}
                        </Text>
                    </View>
                    <Text adjustsFontSizeToFit numberOfLines={1}
                        style={{...styles.textRatioNumber, color: Colors.red}}>
                        {death}
                    </Text>
                    <Text style={styles.textRatioLabel}>{Strings.labelKasus}</Text>
                </View>
            </View>

            <Text style={styles.textService}>
                {Strings.labelLayanan}
            </Text>

            <Text style={styles.textServiceCaption}>
                {Strings.labelLayananCaption}
            </Text>

            <FlatList 
                nestedScrollEnabled={false}
                style={{...styles.listMenu, backgroundColor: Colors.darkWhite}}
                columnWrapperStyle={styles.listMenuColum}
                data={MenuList}
                renderItem={(itemData) => (
                    <DashboardMenuItem 
                        item={itemData.item} 
                        onSelected={handlerMenuSelected}
                        column={4}/>
                )}
                keyExtractor={(item) => item.id}
                numColumns={4}/>

            <Text style={styles.textSponsor}>
                {Strings.labelLayanan}
            </Text>

            <Text style={styles.textSponsorCaption}>
                {Strings.labelLayananCaption}
            </Text>

            <FlatList 
                nestedScrollEnabled={false}
                style={{...styles.listMenu, marginTop: 0}}
                columnWrapperStyle={styles.listMenuColum}
                data={SponsorList}
                renderItem={(itemData) => (
                    <DashboardSponsorItem 
                        item={itemData.item} 
                        onSelected={handlerSponsorSelected}
                        column={4}/>
                )}
                keyExtractor={(item) => item.id}
                numColumns={4}/>

            <Text style={styles.textVersion}>
                {Strings.labelAplikasiVersi + " " + Constants.manifest.version}
            </Text>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
    },
    textRed: {
        color: Colors.red,
    },
    mapStyle: {
        width: Dimensions.get('window').width - 32,
        aspectRatio: 2,
        marginTop: 16,
        marginHorizontal: 16,
    },
    textLastUpdate: {
        marginTop: 4,
        marginHorizontal: 16,
        color: Colors.grey,
        fontSize: 10,
        fontWeight: "bold",
    },
    textRatio: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold",
    },
    containerRatio: {
        flexDirection: "row",
        marginTop: 16,
        paddingHorizontal: 12
    },
    containerRatioItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 4,
        marginHorizontal: 4,
        padding: 8,
    },
    containerRatioItemHeader: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRatioHeader: {
        flex: 1,
        marginStart: 4,
        color: Colors.lightBlack,
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
    textRatioNumber: {
        marginTop: 4,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    }, 
    textRatioLabel: {
        color: Colors.grey,
        fontSize: 12,
        textAlign: "center",
    },
    textService: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold"
    }, 
    textServiceCaption: {
        marginHorizontal: 16,
        color: Colors.grey,
        fontSize: 10,
    },
    listMenu:{
        flexGrow: 0,
        marginTop: 12,
        paddingVertical: 12,
    },
    listMenuColum:{
        flex: 1,
        alignItems: "flex-start",
        paddingStart: 16,
        paddingBottom: 8
    },
    textSponsor: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold"
    }, 
    textSponsorCaption: {
        marginHorizontal: 16,
        color: Colors.grey,
        fontSize: 10,
    },
    textVersion: {
        margin: 16,
        color: Colors.grey,
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default HomeScreen