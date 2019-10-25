import React, { Component } from 'react'
import {
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	Image
} from 'react-native'
import {
	Container,
	Header,
	Title,
	Content,
	Right,
	Body,
	Text,
	Card,
	Spinner
} from 'native-base'
import Dash from 'react-native-dash'
import { connect } from 'react-redux'
import { authenticate } from '../Redux/Actions/Auth'
import { resetBooking } from '../Redux/Actions/Booking'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Slideshow from '../Components/Slideshow'
import TravelTips from '../Components/TravelTips'
import Http from '../Helpers/Http'

class HomeScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			isLoading: true,
			travelTips: [],
			promotions: []
		}
	}

	componentDidMount(){
		this.getDataTravelTips()
		this.getDataPromo()
    }

	async getDataTravelTips(){
		this.setState({
			isLoading: true
		})
        await Http.get('/article/traveltips')
        .then((res) => {
            console.log(res.data.data)
            this.setState({
				travelTips: res.data.data,
				isLoading: false
            })
        })
        .catch((err) => {
			console.log(err.message)
			this.setState({
				isLoading: false
			})
        })
	}
	
	async getDataPromo(){
		this.setState({
			isLoading: true
		})
        await Http.get('/article/promotion')
        .then((res) => {
            console.log(res.data.data)
            this.setState({
				promotions: res.data.data,
				isLoading: false
            })
        })
        .catch((err) => {
			console.log(err.message)
			this.setState({
				isLoading: false
			})
        })
	}
	
	async orderAirplanTicket(){
		await this.props.dispatch(resetBooking())
		this.props.navigation.navigate('OrderAirplaneTicket')
	}

	render() {
		return (
			<Container>
				<ScrollView style={{ marginBottom: 20 }}>
					<Header style={styles.header} androidStatusBarColor='#f97432'>
						<Body>
							<Image
								style={{ width: 120, height: 25, }}
								source={require('../Assets/Images/Logo_Pegilagi.png')}
							/>
						</Body>
						<Right />
					</Header>
					<Content>
						<ImageBackground source={require('../Assets/Images/bg-home.jpeg')} style={styles.imageBackground}>
							<Content contentContainerStyle={styles.overlay}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHotel')} style={styles.buttonAction}>
									<Content contentContainerStyle={styles.buttonActionOverlay}>
										<FontAwesomeIcon style={{ color: '#f9b332' }} size={35} name={'building'} />
									</Content>
									<Text style={styles.buttonActionText}>HOTEL</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.orderAirplanTicket()} style={styles.buttonAction}>
									<Content contentContainerStyle={styles.buttonActionOverlay}>
										<FontAwesomeIcon style={{ color: '#f5b7b3' }} size={35} name={'plane'} />
									</Content>
									<Text style={styles.buttonActionText}>PESAWAT</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('OrderTrainTicket')} style={styles.buttonAction}>
									<Content contentContainerStyle={styles.buttonActionOverlay}>
										<FontAwesomeIcon style={{ color: '#f97432' }} size={35} name={'train'} />
									</Content>
									<Text style={styles.buttonActionText}>KERETA API</Text>
								</TouchableOpacity>
							</Content>
						</ImageBackground>
					</Content>

					<Content contentContainerStyle={styles.container}>
						<Content contentContainerStyle={styles.section}>
							<Content contentContainerStyle={[styles.floatLeft, { flexDirection: 'row' }]}>
								<MaterialCommunityIcon style={styles.iconSection} size={25} name='brightness-percent' />
								<Text style={styles.titleSection}>Promo</Text>
							</Content>
							<Content contentContainerStyle={[styles.floatRight]}>
								<TouchableOpacity onPress={() => alert('oke')}>
									<Content contentContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={{ color: '#f97432', marginRight: 8 }}>Lihat Semua</Text>
										<MaterialCommunityIcon style={{ color: '#f97432' }} size={20} name='arrow-right' />
									</Content>
								</TouchableOpacity>
							</Content>
						</Content>
						{this.state.isLoading ? <Spinner color='#f97432' /> : <Slideshow data={this.state.promotions} navigate={this.props.navigation.navigate} /> }
					</Content>

					<Dash style={{ width: '100%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />

					<Content contentContainerStyle={styles.container}>
						<Content contentContainerStyle={styles.section}>
							<Content contentContainerStyle={[styles.floatLeft, { flexDirection: 'row' }]}>
								<MaterialCommunityIcon style={styles.iconSection} size={25} name='weather-partlycloudy' />
								<Text style={styles.titleSection}>Travel Tips</Text>
							</Content>
							<Content contentContainerStyle={[styles.floatRight]}>
								<TouchableOpacity onPress={() => alert('oke')}>
									<Content contentContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={{ color: '#f97432', marginRight: 8 }}>Lihat Semua</Text>
										<MaterialCommunityIcon style={{ color: '#f97432' }} size={20} name='arrow-right' />
									</Content>
								</TouchableOpacity>
							</Content>
						</Content>
						{this.state.isLoading ? <Spinner color='#f97432' /> : <TravelTips data={this.state.travelTips} navigate={this.props.navigation.navigate} />}
					</Content>

					<Dash style={{ width: '100%', height: 1, marginTop: 22 }} dashColor='#d9d9d9' />

					<Content contentContainerStyle={styles.container}>
						<Content contentContainerStyle={styles.section}>
							<Content contentContainerStyle={[styles.floatLeft, { flexDirection: 'row' }]}>
								<MaterialCommunityIcon style={styles.iconSection} size={25} name='headphones' />
								<Text style={styles.titleSection}>Bantuan Pelanggan</Text>
							</Content>
						</Content>
						<Card style={{ padding: 20 }}>
							<Content contentContainerStyle={{ flexDirection: 'row' }}>
								<MaterialCommunityIcon style={styles.iconHelp} size={40} name='comment-question-outline' />
								<Content>
									<Text style={styles.textTitleHelp}>Ada yang bisa dibantu?</Text>
									<Text style={styles.textSubTitleHelp}>Kami siap membantu Anda 24 jam</Text>
								</Content>
							</Content>
						</Card>
					</Content>
				</ScrollView>
			</Container>
		);
	}
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12
	},
	header: {
		backgroundColor: '#fff'
	},
	imageBackground: {
		width: '100%',
		height: SCREEN_WIDTH * 0.5,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		resizeMode: 'stretch'
	},
	overlay: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	floatRight: {
		marginLeft: 'auto'
	},
	floatLeft: {
		marginRight: 'auto'
	},
	buttonAction: {
		alignItems: 'center',
		marginHorizontal: 20
	},
	buttonActionOverlay: {
		width: 70,
		height: 70,
		borderRadius: 100,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonActionText: {
		color: '#fff',
		elevation: 6
	},
	section: {
		marginTop: 14,
		flexDirection: 'row',
	},
	borderBottom: {
		paddingBottom: 16,
		borderBottomColor: '#b3b3b3',
		borderBottomWidth: 1
	},
	titleSection: {
		color: '#525252',
		fontSize: 18,
		alignSelf: 'center',
		marginLeft: 10
	},
	iconSection: {
		color: '#d9d9d9'
	},
	textTitleHelp: {
		fontSize: 18
	},
	textSubTitleHelp: {
		fontSize: 18,
		color: '#878787'
	},
	iconHelp: {
		marginRight: 16,
		color: '#ff9800'
	}

})

const mapStateToProps = state => {
	return {
		auth: state.Auth
	}
}

export default connect(mapStateToProps)(HomeScreen)