import React, { useRef, useState, useEffect } from 'react'
import { YellowBox, StyleSheet, Dimensions, ScrollView, View, Text, FlatList, Linking, Platform, Image } from 'react-native'
import MapView from 'react-native-maps'
import FAB from 'react-native-fab'

import { IconCircleGreen, IconCircleRed, IconRefresh } from '../../utils/repo/local/SvgRequestManager'
import SRM from '../../utils/repo/remote/ServerRequestManager'
import { IconVirus, IconRecover, IconTombstone } from '../../utils/repo/local/SvgRequestManager'
import DashboardMenuItem from '../../components/DashboardMenuItem'
import DashboardSponsorItem from '../../components/DashboardSponsorItem'

import Colors from '../../utils/Colors'
import Strings from '../../utils/Strings'
import { MenuList, SponsorList } from '../../utils/Statics'
import CommonUtils from '../../utils/CommonUtils'
import Keys from '../../utils/Keys'
import { Constants } from 'react-native-unimodules'

const HomeScreen = ({ navigation }) => {
    YellowBox.ignoreWarnings([ "VirtualizedLists should never be nested", /*TODO: Remove when fixed*/ ])

    const scrollViewRef = useRef(null)
    const mapRef = useRef(null)

    const [isRefreshing, setIsRefreshing] = useState(true)
    const [lastUpdated, setLastUpdated] = useState("Terakhir diperbarui: -")
    const [positive, setPositive] = useState(0)
    const [recover, setRecover] = useState(0)
    const [death, setDeath] = useState(0)
    const [provinces, setProvinces] = useState([])

    useEffect(() => {
        if(isRefreshing){
            getRatio()
            getProvinces()
        }
    }, [isRefreshing])

    useEffect(() => {
        const positions = provinces.map(province => (
            {latitude: parseFloat(province.lat, 0), longitude: parseFloat(province.lng, 0)}
        ))
        if(positions.length > 0){
            mapRef.current.fitToCoordinates(
                positions, 
                { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 } })
        }
    }, [provinces])
    
    const getRatio = async () => { 
        SRM.getRatio()
        .then(data => {
            setPositive(data.confirmed)
            setRecover(data.recovered)
            setDeath(data.deaths)
            setLastUpdated("Terakhir diperbarui: " + data.lastupdated)
            setIsRefreshing(false)
        })
        .catch(error => { setIsRefreshing(false) })
    }
    
    const getProvinces = async () => { 
        SRM.getProvinces()
        .then(data => { setProvinces(data.province) })
        .catch(error => {})
    }

    const handlerMenuSelected = item => {
        if(!item.isActive) CommonUtils.showAlert("info", `${item.title}`, "Masih dalam tahap pengembangan")
        else {
            if(item.link){
                navigation.navigate("WebView", {
                    title: item.title,
                    link: item.link,
                })
            } else {
                if(item.id === Keys.KEY_MENU_RS_RUJUKAN) {}
                else if(item.id === Keys.KEY_MENU_HOTLINE) {
                    const url = Platform.OS === "ios" ? "tel://119" : "tel:119"
                    Linking.openURL(url)
                }
                else if(item.id === Keys.KEY_MENU_LACAK_ODSODP) {}
            }
        }
    }

    const handlerSponsorSelected = item => {
        if(!item.isActive) CommonUtils.showAlert("info", `${item.title}`, "Masih dalam tahap pengembangan")
        else {
            Linking.canOpenURL(item.link).then(supported => {
                if (supported) {
                  Linking.openURL(item.link)
                } else {
                  console.log("Don't know how to open URI: " + item.link)
                }
            })
        }
    }
    
    const handlerFabPressed = () => {
        setIsRefreshing(true)
        scrollViewRef.current.scrollTo({x:0, y:0, animated:true})
    }

    const getMarkerSize = size => {
        if(size <= 100){
            return 10
        } else if (size > 100 && size < 500) {
            return size / 20
        } else if (size >= 500 && size < 1000) {
            return size / 25
        } else if (size >= 1000 && size < 1500) {
            return size / 30
        } else if (size >= 1500 && size < 2000) {
            return size / 35
        } else {
            return 64
        }
    }

    return (
        <View style={styles.screen}>

            <ScrollView ref={scrollViewRef}>
                <Text style={styles.header}>
                    {Strings.labelWelcomeStart}
                    <Text style={styles.textRed}>{Strings.labelWelcomeRed}</Text>
                    {Strings.labelWelcomeEnd}
                </Text>

                <MapView ref={mapRef}
                    style={styles.mapStyle}
                    provider={MapView.PROVIDER_GOOGLE}>
                    {provinces.map(province => (
                        <MapView.Marker
                            key={`${parseFloat(province.lat, 0)}, ${parseFloat(province.lng, 0)}`}
                            coordinate={{latitude: parseFloat(province.lat, 0), longitude: parseFloat(province.lng, 0)}}
                            title={province.province}
                            description={"Kasus Positif: " + province.positive}>
                            {
                                province.positive > 0 ? 
                                <IconCircleRed size={getMarkerSize(province.positive)} /> : 
                                <IconCircleGreen size={10} />
                            }
                        </MapView.Marker>
                    ))}
                </MapView>

                <Text style={styles.textLastUpdate}>{lastUpdated}</Text>

                <Text style={styles.textRatio}>
                    {Strings.labelRasioStart}
                    <Text style={styles.textRed}>{Strings.labelRasioRed}</Text>
                    {Strings.labelRasioEnd}
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
            
            <FAB style={styles.fab} 
                buttonColor="white" 
                onClickAction={handlerFabPressed} 
                iconTextComponent={<IconRefresh />} />
            
        </View>
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
        fontWeight: "bold"
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
        marginTop: 0,
        marginHorizontal: 16,
        marginVertical: 96,
        color: Colors.grey,
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default HomeScreen