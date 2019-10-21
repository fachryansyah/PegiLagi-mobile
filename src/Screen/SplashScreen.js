import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import {
	Text,
	H1,
	Container
} from 'native-base'

export default class SplashScreen extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount(){
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
