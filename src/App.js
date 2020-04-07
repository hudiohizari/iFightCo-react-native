import React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DropdownAlert from 'react-native-dropdownalert'
import { useFonts } from '@use-expo/font'

import NavigationScreen from './screens/main/NavigationScreen'
import WebViewScreen from './screens/main/WebViewScreen'
import ReferenceScreen from './screens/reference/ReferenceScreen'

import AlertUtils from './utils/AlertUtils'
import { AppLoading } from 'expo'

const Stack = createStackNavigator()

const Typography = () => {
    const oldTextRender = Text.render
    Text.render = function(...args) {
		const origin = oldTextRender.call(this, ...args)
		if (origin.props.style && origin.props.style.fontWeight) {
			return React.cloneElement(origin, {
				style: [origin.props.style, fontStyles.boldText],
			})
		} else {
			return React.cloneElement(origin, {
				style: [fontStyles.regularText, origin.props.style],
			})
		}
    }
}

const fontStyles = StyleSheet.create({
    regularText: {
        fontFamily: "Muli",
	},
	boldText: {
		fontFamily: "Muli-Bold",
		fontWeight: "normal"
    }
}) 

export default function App() {
	const [regularLoaded] = useFonts({ Muli: require("./assets/fonts/Muli-Regular.ttf" )})
	const [boldLoaded] = useFonts({ "Muli-Bold": require("./assets/fonts/Muli-Bold.ttf" )})

	if(!(regularLoaded && boldLoaded)){
		return <AppLoading />
	} else {
		Typography()
		return (
			<View style={styles.container}>
	
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen 
							name="Navigation" 
							component={NavigationScreen}/>
						<Stack.Screen 
							name="WebView" 
							component={WebViewScreen}/>
						<Stack.Screen 
							name="Reference" 
							component={ReferenceScreen}/>
					</Stack.Navigator>
				</NavigationContainer>
	
				<DropdownAlert
					defaultContainer={{ marginTop: StatusBar.currentHeight ,padding: 8, flexDirection: 'row' }}
					infoImageSrc={null}
					warnImageSrc={null}
					errorImageSrc={null}
					successImageSrc={null}
					ref={ref => AlertUtils.setDropDown(ref)}
					onClose={() => AlertUtils.invokeOnClose()}
				/>
	
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
