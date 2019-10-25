import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Image, Dimensions, RefreshControl } from 'react-native'
import {
	Container,
	Header,
	Title,
	Content,
	Body,
	Text,
	Tab,
	Tabs,
	TabHeading,
	Spinner,
	Card,
	Button
} from 'native-base'
import Dash from 'react-native-dash'
import { connect } from 'react-redux'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import Moment from 'moment'
import Http from '../Helpers/Http'

const SCREEN_HEIGHT = Dimensions.get('window').height

class OrderScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			booking: [
				{
					order_no: 'ASJYR346J235GGH',
					from: 'Jakarta',
					to: 'Yogyakarta',
					departure_time: 'Rabu 23 okt 19',
					arrived_time: 'Rabu 23 okt 19'
				}
			]
		}
	}

	componentDidMount(){
		Moment.locale('id')
		if (this.props.auth.isAuthenticate) {
			this.getHistoryOrder()
		}
	}

	async getHistoryOrder(){
		
		this.setState({
			isLoading: true
		})

		await Http.get('/history')
		.then((res) => {
			console.log(res.data.data)
			this.setState({
				booking: res.data.data,
				isLoading: false
			})
		})
		.catch((err) => {
			this.setState({
				isLoading: false
			})
			console.log(err.message)
		})
	}

	__renderStatus(status){
		if (status == 1) {
			return(
				<>
					<IoniconsIcon style={{
						color: '#ffd500',
						marginRight: 6,
						alignSelf: 'center'
					}} size={16} name='md-time' />
					<Text style={{
						color: '#ffd500',
						fontSize: 13,
						alignSelf: 'center'
					}}>MENUNGGU PEMBAYARAN</Text>
				</>
			)
		}else if (status == 2) {
			return(
				<>
					<IoniconsIcon style={{
						color: '#409636',
						marginRight: 6,
						alignSelf: 'center'
					}} size={16} name='md-checkmark-circle-outline' />
					<Text style={{
						color: '#409636',
						fontSize: 13,
						alignSelf: 'center'
					}}>DI BAYAR</Text>
				</>
			)
		}else if (status == 3) {
			return(
				<>
					<IoniconsIcon style={{
						color: '#bf1717',
						marginRight: 6,
						alignSelf: 'center'
					}} size={16} name='md-close-circle-outline' />
					<Text style={{
						color: '#bf1717',
						fontSize: 13,
						alignSelf: 'center'
					}}>DI BATALKAN</Text>
				</>
			)
		}
	}

	__renderLogin() {
		if (this.state.isLoading) {
			return(
				<>
					<Spinner color='#f97432' />
				</>
			)
		}else{
			return(
				<FlatList
					data={this.state.booking}
					keyExtractor={(item) => item.id}
					refreshControl={
                        <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.getHistoryOrder()} />
                    }
					renderItem={({ item, key }) => (
						<Card style={{ padding: 18 }} key={key}>
							<View style={styles.displayRow}>
								<View style={[styles.floatLeft, styles.displayRow]}>
									{this.__renderStatus(item.status)}
								</View>
								<View style={styles.floatRight}>
									<Text style={styles.textTitleOrderNo}>Nomor Pesanan</Text>
									<Text style={styles.textOrderNo}>{item.order_no}</Text>
								</View>
							</View>

							<View style={[styles.displayRow, { marginTop: 12 }]}>
								<View style={[styles.floatLeft, styles.displayRow]}>
									<IoniconsIcon style={styles.iconDestination} size={30} name='ios-airplane' />
									<Text style={styles.textLocation}>{item.planeTicket.fromAirport.city}</Text>
									<FontistoIcon style={styles.iconArrow} name='arrow-right-l' size={16} />
									<Text style={styles.textLocation}>{item.planeTicket.toAirport.city}</Text>
								</View>
								<View style={[styles.floatRight, styles.displayRow]}>
									<Text style={styles.textTransit}>Sekali jalan</Text>
								</View>
							</View>

							<View style={[styles.displayRow, { marginTop: 12 }]}>
								<View style={[styles.floatLeft, styles.displayRow]}>
									<Text style={styles.textHint}>Berangkat</Text>
								</View>
								<View style={[styles.floatRight, styles.displayRow]}>
									<Text style={styles.textHint}>Tiba</Text>
								</View>
							</View>

							<View style={[styles.displayRow, { marginTop: 6 }]}>
								<View style={[styles.floatLeft, styles.displayRow]}>
									<Text style={styles.textDate}>{Moment(item.departure_time).format('D MMMM YYYY')}</Text>
								</View>
								<View style={styles.displayRow}>
									<Text>{item.planeTicket.fromAirport.code_name}</Text>
									<FontistoIcon style={styles.iconArrowCity} name='arrow-right' size={12} />
									<Text>{item.planeTicket.toAirport.code_name}</Text>
								</View>
								<View style={[styles.floatRight, styles.displayRow]}>
									<Text style={styles.textDate}>{Moment(item.arrived_time).format('D MMMM YYYY')}</Text>
								</View>
							</View>

							<View style={[styles.displayRow, { marginTop: 6 }]}>
								<View style={[styles.floatLeft, styles.displayRow]}>
									<Text style={styles.textDate}>{Moment(item.departure_time).format('LT')}</Text>
								</View>
								<View style={[styles.floatRight, styles.displayRow]}>
									<Text style={styles.textDate}>{Moment(item.arrived_time).format('LT')}</Text>
								</View>
							</View>
						</Card>
					)}
				/>
			)
		}
	}

	__renderNotLogin() {
		return (
			<View style={{ height: '100%', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#fafafa' }}>
				<View style={{ alignItems: 'center' }}>
					<Image style={{ width: 60, height: 60 }} source={require('../Assets/Images/bg-no-login-order.jpg')} />
					<Text style={{ fontWeight: 'bold', fontSize: 21, color: '#4d4d4d', marginTop: 12 }}>Masuk dulu yuk!</Text>
					<Text style={{ marginTop: 12, color: '#4d4d4d', textAlign: 'center' }}>Masuk atau Daftar sekarang untuk akses mudah melihat pesanan Anda di sini.</Text>
					<View style={{ marginTop: 12, flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1, }}>
							<Button style={styles.buttonLogin} onPress={() => this.props.navigation.navigate("Login")}><Text style={{ color: '#f97432' }} >LOGIN</Text></Button>
						</View>
						<View style={{ flex: 1, }}>
							<Button style={styles.buttonRegister} onPress={() => this.props.navigation.navigate("Register")}><Text>REGISTER</Text></Button>
						</View>
					</View>
				</View>
			</View>
		)
	}

	render() {
		return (
			<Container>
				<Header style={styles.header} androidStatusBarColor='#f97432'>
					<Body>
						<Title>Pesanan</Title>
					</Body>
				</Header>

				<Content>
					<View style={{ height: SCREEN_HEIGHT * 0.71 }}>
						{this.props.auth.isAuthenticate ? this.__renderLogin() : this.__renderNotLogin()}
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#f97432'
	},
	displayRow: {
		flexDirection: 'row'
	},
	floatRight: {
		marginLeft: 'auto'
	},
	floatLeft: {
		marginRight: 'auto'
	},
	textStatus: {
		color: '#ffd500',
		fontSize: 13,
		alignSelf: 'center'
	},
	iconStatus: {
		color: '#ffd500',
		marginRight: 6,
		alignSelf: 'center'
	},
	textTitleOrderNo: {
		fontSize: 11,
	},
	textOrderNo: {
		fontSize: 12
	},
	iconDestination: {
		color: '#ff9800',
		marginRight: 6,
		alignSelf: 'center'
	},
	iconArrow: {
		marginHorizontal: 6,
		alignSelf: 'center'
	},
	textLocation: {
		fontSize: 14,
		alignSelf: 'center'
	},
	textTransit: {
		alignSelf: 'center'
	},
	textHint: {
		fontSize: 12,
		color: '#ababab'
	},
	textDate: {
		fontSize: 14
	},
	iconArrowCity: {
		marginHorizontal: 6,
		alignSelf: 'center',
		color: '#ff9800'
	},
	buttonLogin: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		marginLeft: 10,
		marginRight: 5
	},
	buttonRegister: {
		justifyContent: 'center',
		backgroundColor: '#f97432',
		marginRight: 10,
		marginLeft: 5
	}
})

const mapStateToProps = state => {
	return {
		auth: state.Auth
	}
}

export default connect(mapStateToProps)(OrderScreen)