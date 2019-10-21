import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import HomeScreen from './Screen/HomeScreen';
import SplashScreen from './Screen/SplashScreen';

const MainNavigation = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
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
