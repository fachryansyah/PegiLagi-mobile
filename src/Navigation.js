import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import React from 'react'
import { View } from 'react-native'
import HomeScreen from './Screen/HomeScreen'
import SplashScreen from './Screen/SplashScreen'
import OrderScreen from './Screen/OrderScreen'
import InboxScreen from './Screen/InboxScreen'
import ProfileScreen from './Screen/ProfileScreen'
import OrderAirPlaneTicket from './Screen/Order/OrderAirplaneTicket'
import OrderTrainTicket from './Screen/Order/OrderTrainTicket'
import OrderHotel from './Screen/Order/OrderHotel'
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import SearchStation from './Screen/Search/SearchStation'
import SearchAirportTo from './Screen/Search/SearchAirportTo'
import SearchAirportFrom from './Screen/Search/SearchAirportFrom'
import FilterAirplaneTicket from "./Screen/Filter/FilterAirplaneTicket"
import FilterTrainTicket from "./Screen/Filter/FilterTrainTicket"
import ListAirplaneTicket from './Screen/List/ListAirplaneTicket'
import ListTrainTicket from './Screen/List/ListTrainTicket'
import Payment from './Screen/Payment/PaymentScreen'
import BookingTicketAirPlane from './Screen/Booking/BookingTicketAirPlane'
import BookingTicketTrain from './Screen/Booking/BookingTicketTrain'
import PassengerDataTrain from './Screen/PassengerData/PassengerDataTrain'
import PassengerDataAirplane from './Screen/PassengerData/PassengerDataAirplane'
import HomeProfil from './Screen/Home'
import ChangePassword from './Screen/ChangePassword'
import ChangeEmail from './Screen/ChangeEmail'
import ChangePersonalData from './Screen/ChangePersonalData'
import HistoryTicketTrain from './Screen/History/HistoryTicketTrain'
import HistoryTicketAirplane from './Screen/History/HistoryTicketAirplane'

const TabNavigation = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<FeatherIcon style={[{ color: tintColor }]} size={25} name={'home'} />
					</View>
				),
			}
		},
		Order: {
			screen: OrderScreen,
			navigationOptions: {
				tabBarLabel: 'Pesanan',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<IoniconsIcon style={[{ color: tintColor }]} size={25} name={'ios-list-box'} />
					</View>
				),
			}
		},
		Inbox: {
			screen: InboxScreen,
			navigationOptions: {
				tabBarLabel: 'Inbox',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<IoniconsIcon style={[{ color: tintColor }]} size={25} name={'md-mail'} />
					</View>
				),
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarLabel: 'Profil',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<FeatherIcon style={[{ color: tintColor }]} size={25} name={'user'} />
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
		},
		OrderAirplaneTicket: {
			screen: OrderAirPlaneTicket
		},
		OrderTrainTicket: {
			screen: OrderTrainTicket
		},
		OrderHotel: {
			screen: OrderHotel
		},
		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		},
		SearchStation: {
			screen: SearchStation
		},
		SearchAirPortTo: {
			screen: SearchAirportTo
		},
		SearchAirPortFrom: {
			screen: SearchAirportFrom
		},
		FilterAirplaneTicket: {
			screen: FilterAirplaneTicket
		},
		FilterTrainTicket: {
			screen: FilterTrainTicket
		},
		ListAirplaneTicket: {
			screen: ListAirplaneTicket
		},
		ListTrainTicket: {
			screen: ListTrainTicket
		},
		Payment: {
			screen: Payment
		},
		BookingTicketAirPlane: {
			screen: BookingTicketAirPlane
		},
		BookingTicketTrain: {
			screen: BookingTicketTrain
		},
		PassengerDataTrain: {
			screen: PassengerDataTrain
		},
		PassengerDataAirplane: {
			screen: PassengerDataAirplane
		},
		HomeProfil: {
			screen: HomeProfil
		},
		ProfileScreen: {
			screen: ProfileScreen
		},
		ChangePassword: {
			screen: ChangePassword
		},
		ChangeEmail: {
			screen: ChangeEmail
		},
		ChangePersonalData: {
			screen: ChangePersonalData
		},
		HistoryTicketTrain: {
			screen: HistoryTicketTrain
		},
		HistoryTicketAirplane: {
			screen: HistoryTicketAirplane
		},
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
