import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import React from 'react'
import {View} from 'react-native'
import HomeScreen from './Screen/HomeScreen'
import SplashScreen from './Screen/SplashScreen'
import OrderScreen from './Screen/OrderScreen'
import InboxScreen from './Screen/InboxScreen'
import ProfileScreen from './Screen/ProfileScreen'


const TabNavigation = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <FeatherIcon style={[{color: tintColor}]} size={25} name={'home'}/>  
					</View>
				),
            } 
		},
		Order: {
			screen: OrderScreen,
			navigationOptions:{  
                tabBarLabel:'Pesanan',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <IoniconsIcon style={[{color: tintColor}]} size={25} name={'ios-list-box'}/>  
					</View>
				),
            }  
		},
		Inbox: {
			screen: InboxScreen,
			navigationOptions:{  
                tabBarLabel:'Inbox',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <IoniconsIcon style={[{color: tintColor}]} size={25} name={'md-mail'}/>  
					</View>
				),
            }
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions:{  
                tabBarLabel:'Profil',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <FeatherIcon style={[{color: tintColor}]} size={25} name={'user'}/>  
					</View>
				),
            }
		}
	},
	{
		activeColor: '#f97432',
		inactiveColor: '#e0e0e0',
		barStyle: { backgroundColor: '#fff' }
	}
)

const MainNavigation = createStackNavigator(
	{
		Home: TabNavigation,
		Splash: {
			screen: SplashScreen
		}
	},
	{
		headerMode: 'none',
		initialRouteName: 'Splash'
	}
);


// const MainNavigation = StackNavigator(
// 	{
// 		otp: { 
// 			screen: OTPlogin
// 		},
// 		otpverify: { 
// 			screen: OTPverification
// 		},
// 		userVerified: {
// 			screen: TabNavigator({
// 				List: { screen: List },
// 				Settings: { screen: Settings }
// 			}),
// 		}
// 	},
// 	{
// 		headerMode: 'none',
// 		navigationOptions: {
// 			headerVisible: false,
// 		}
// 	}
// );

export default createAppContainer(MainNavigation);
