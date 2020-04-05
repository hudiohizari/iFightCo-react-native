import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DropdownAlert from 'react-native-dropdownalert'

import NavigationScreen from './screens/NavigationScreen'
import WebViewScreen from './screens/WebViewScreen'

import AlertUtils from './utils/AlertUtils'

const Stack = createStackNavigator()

export default function App() {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
