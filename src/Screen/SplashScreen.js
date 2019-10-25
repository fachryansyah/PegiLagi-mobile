import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import {
	Text,
	H1,
	Container
} from 'native-base'
import { connect } from 'react-redux'
import { authenticate, logout } from '../Redux/Actions/Auth'
import Http from '../Helpers/Http'
import AsyncStorage from '@react-native-community/async-storage'

class SplashScreen extends Component {

	constructor(props){
		super(props)
	}

	async componentDidMount(){
		const token = await AsyncStorage.getItem('@token')
		
		console.log(token)
		
		await Http.get('/user')
		.then( async (res) => {
			console.log(res.data)
			if (res.data.status == 200) {
				await this.props.dispatch(authenticate(res.data.data))
			}

			if (res.data.status == 403) {
				await this.props.dispatch(logout())
			}
		})
		.catch((err) => {
			console.log(err.message)
		})

		setTimeout(() => {
			this.props.navigation.navigate('Home')
		}, 3000)
		
	}

	render() {
		return (
			<Container style={styles.container}>
				<Image source={require('../Assets/Images/splash.png')} style={styles.image} />
			</Container>
		);
	}
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	image:{
		width: SCREEN_WIDTH,
		height: '100%'
	}
})

const mapStateToProps = state => {
	return {
		auth: state.Auth
	}
}

export default connect(mapStateToProps)(SplashScreen)