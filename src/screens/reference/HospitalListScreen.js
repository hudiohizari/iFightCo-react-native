import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, BackHandler } from 'react-native'
import Modal from 'react-native-modals'

import StatusBar from '../../components/StatusBar'
import Toolbar from '../../components/ToolbarBackText'
import HospitalListItem from '../../components/HospitalListItem'
import HospialDetailContent from '../../components/HospialDetailContent'

import Colors from '../../utils/Colors'

const HospitalListScreen = ({ route, navigation }) =>{
    const { title, hospitals } = route.params

    const [isHospitalDetailVisible, setIsHospitalDetailVisible] = useState(false)
    const [selectedHospital, setSelectedHospital] = useState()

    // Start of Fix for android backbutton not closing Modal
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handlerBackButton)
    
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handlerBackButton)
        }
    }, [isHospitalDetailVisible])
    
    const handlerBackButton = () => {
        if(!isHospitalDetailVisible) return false
        setIsHospitalDetailVisible(false)
        return true //Prevent back to previous screen
    }
    // End of Fix for android backbutton not closing Modal

    const handlerBackPressed = () => { navigation.popToTop() }

    const handlerHospitalPressed = (item) => {
        setSelectedHospital(item)
        setIsHospitalDetailVisible(true)
    }

    const handlerOnCloseHospitalDetail = () => {
        setIsHospitalDetailVisible(false)
    }

    return(
        <View style={styles.screen}>

            <StatusBar color={Colors.primaryPurple} isLight={true}/>

            <Toolbar onBackPressed={handlerBackPressed} 
                title={title}
                color="white"
                childColor={Colors.primaryPurple}/>
                
            <FlatList 
                style={styles.container}
                data={hospitals.sort((a, b) => a.distance - b.distance)}
                renderItem={(itemData) => <HospitalListItem object={itemData.item} onSelectedItem={handlerHospitalPressed}/>}
                keyExtractor={(itemData) => itemData.name }/>

            <Modal.BottomModal
                    visible={isHospitalDetailVisible}
                    onTouchOutside={handlerOnCloseHospitalDetail}
                    onSwipeOut={handlerOnCloseHospitalDetail}>
                    <HospialDetailContent hospital={selectedHospital}/>
                </Modal.BottomModal>

        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
})

export default HospitalListScreen