import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import Geocoder from 'react-native-geocoding'
import { Constants } from 'react-native-unimodules'

import StatusBar from '../../components/StatusBar'
import Toolbar from '../../components/ToolbarBackText'
import AutoCompleteBox from '../../components/AutoCompleteBox'

import { IconHospital, IconPin, IconRefresh } from '../../utils/repo/local/SvgRequestManager'
import SRM from '../../utils/repo/remote/ServerRequestManager'
import Colors from '../../utils/Colors'
import Strings from '../../utils/Strings'
import CommonUtils from '../../utils/CommonUtils'
import Env from '../../utils/Env'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WebViewScreen = ({ route, navigation }) =>{
    const { provinces } = route.params

    const mapRef = useRef(null)

    const [location, setLocation] = useState()
    const [address, setAddress] = useState("-")
    const [hospitals, setHospitals] = useState()

    useEffect(() => {
        Geocoder.init(Env.GEO_CODING)
    }, [])

    useEffect(() => {
        if(location) { 
            mapRef.current.animateCamera({
                center: {latitude: location.latitude, longitude: location.longitude},
                zoom: 14,
            }, { duration: 2500 })
            Geocoder.from(location.latitude, location.longitude)
                .then(json => {
                    setAddress(json.results[0].formatted_address)
                })
                .catch(error => console.log(error))
                // .catch(error => CommonUtils.showAlert("info", "Oops", error))
        }
    }, [location])

    useEffect(() => {
        if(hospitals) {
            const positions = hospitals.map(hospital => (
                {latitude: parseFloat(hospital.lat, 0), longitude: parseFloat(hospital.lng, 0)}
            ))
            positions.push({latitude: location.latitude, longitude: location.longitude})
            mapRef.current.fitToCoordinates(
                positions, 
                { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }})
        }
    }, [hospitals])

    const handlerBackPressed = () => { 
        navigation.popToTop() 
    }

    const handlerNeedNewLocation = () => { 
        getLocation() 
    }

    const getLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            CommonUtils.showAlert("error", "Denied", "Permission to access location was denied")
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location.coords)
    }

    const handlerSelectedProvince = (value) => {
        let index = provinces.findIndex((province, index) => {
            if(province.province == value) return (index + 1)
        })
        let province = provinces[index]
        getHospitals(province.province_code, province.lat, province.lng)
    }

    const getHospitals = (id, lat, lng) => {
        SRM.getHospitals(id, lat, lng)
        .then(data => { setHospitals(data.hospital) })
        .catch(error => { })
    }

    return(
        <View style={styles.screen}>

            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Toolbar onBackPressed={handlerBackPressed} 
                title={Strings.labelRsRujukan}
                color="white"
                childColor={Colors.primaryPurple}/>

            <AutoCompleteBox containerStyle={styles.inputReference}
                placeholder={Strings.labelCariProvinsi}
                data={provinces.map(province => ( province.province ))}
                onSelectedItem={handlerSelectedProvince}/>

            <Text style={styles.textHeader}>
                {Strings.labelRujukanHeader}
            </Text>

            <Text style={styles.textCaption}>
                {Strings.labelRujukanCaption}
            </Text>

            <MapView ref={mapRef}
                onMapReady={handlerNeedNewLocation}
                showsUserLocation={true}
                style={styles.mapStyle}
                provider={MapView.PROVIDER_GOOGLE}>
                {hospitals && hospitals.map(hospital => (
                    <MapView.Marker
                        key={`${parseFloat(hospital.lat, 0)}, ${parseFloat(hospital.lng, 0)}`}
                        coordinate={{latitude: parseFloat(hospital.lat, 0), longitude: parseFloat(hospital.lng, 0)}}
                        title={hospital.name}>
                        <IconHospital />
                    </MapView.Marker>
                ))}
            </MapView>
            
            <View style={styles.containerAddress}>
                <IconPin size={32}/>
                <Text style={styles.textAddress}>
                    {address}
                </Text>
                <TouchableOpacity onPress={handlerNeedNewLocation}>
                    <IconRefresh fill={Colors.primaryPurple} size={32}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    inputReference: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
    },
    textHeader: {
        marginTop: 16,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 16,
        fontWeight: "bold"
    },
    textCaption: {
        marginHorizontal: 16,
        color: Colors.grey,
    },
    mapStyle: {
        width: Dimensions.get('window').width - 32,
        aspectRatio: 1.5,
        marginTop: 16,
        marginHorizontal: 16,
    },
    containerAddress: {
        flexDirection: "row",
        marginTop: 16,
        marginHorizontal: 16
    },
    textAddress: {
        flexGrow: 1,
        flexShrink: 1,
        marginHorizontal: 16,
        color: Colors.lightBlack,
        fontSize: 12,
        fontWeight: "bold"
    }
})

export default WebViewScreen