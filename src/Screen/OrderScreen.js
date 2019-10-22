import React, { Component } from 'react'
import {StyleSheet, FlatList, View} from 'react-native'
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
	Card
} from 'native-base'
import Dash from 'react-native-dash'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
export default class OrderScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			booking: [
				{
					order_no: 'ASJYR346J235GGH',
					from: 'Jakarta',
					to: 'Yogyakarta',
					departure_time: 'Rabu 23 okt 19',
					arrived_time: 'Rabu 23 okt 19'
				},
				{
					order_no: 'ASJYR346J235GGH',
					from: 'Jakarta',
					to: 'Yogyakarta',
					departure_time: 'Rabu 23 okt 19',
					arrived_time: 'Rabu 23 okt 19'
				},
				{
					order_no: 'ASJYR346J235GGH',
					from: 'Jakarta',
					to: 'Yogyakarta',
					departure_time: 'Rabu 23 okt 19',
					arrived_time: 'Rabu 23 okt 19'
				},
				{
					order_no: 'ASJYR346J235GGH',
					from: 'Jakarta',
					to: 'Yogyakarta',
					departure_time: 'Rabu 23 okt 19',
					arrived_time: 'Rabu 23 okt 19'
				},
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

	render() {
		return (
			<Container>
				<Header style={styles.header} androidStatusBarColor='#f97432'>
					<Body>
						<Title>Pesanan</Title>
					</Body>
				</Header>

				<Content>
					<Tabs
						tabBarUnderlineStyle={{ backgroundColor: '#ff9800', height: 2 }}
					>
						<Tab
							heading={
								<TabHeading style={{ backgroundColor: '#fff' }}>
									<Text style={{ color: '#000' }}>Aktif</Text>
								</TabHeading>
							}
							activeTabStyle
						>
							<FlatList
								data={this.state.booking}
								keyExtractor={(item) => item.id}
								renderItem={({item, key}) => (
									<Card style={{ padding: 18 }} key={key}>
										<View style={styles.displayRow}>
											<View style={[styles.floatLeft, styles.displayRow]}>
												<IoniconsIcon style={styles.iconStatus} size={16} name='md-time' />
												<Text style={styles.textStatus}>MENUNGGU PEMBAYARAN</Text>
											</View>
											<View style={styles.floatRight}>
												<Text style={styles.textTitleOrderNo}>Nomor Pesanan</Text>
												<Text style={styles.textOrderNo}>{item.order_no}</Text>
											</View>
										</View>

										<View style={[styles.displayRow, {marginTop: 12} ]}>
											<View style={[styles.floatLeft, styles.displayRow]}>
												<IoniconsIcon style={styles.iconDestination} size={30} name='ios-airplane' />
												<Text style={styles.textLocation}>{item.from}</Text>
												<FontistoIcon style={styles.iconArrow} name='arrow-right-l' size={16} />
												<Text style={styles.textLocation}>{item.to}</Text>
											</View>
											<View style={[styles.floatRight, styles.displayRow]}>
												<Text style={styles.textTransit}>Sekali jalan</Text>
											</View>
										</View>

										<View style={[styles.displayRow, {marginTop: 12} ]}>
											<View style={[styles.floatLeft, styles.displayRow]}>
												<Text style={styles.textHint}>Berangkat</Text>
											</View>
											<View style={[styles.floatRight, styles.displayRow]}>
												<Text style={styles.textHint}>Tiba</Text>
											</View>
										</View>

										<View style={[styles.displayRow, {marginTop: 6} ]}>
											<View style={[styles.floatLeft, styles.displayRow]}>
												<Text style={styles.textDate}>{item.departure_time}</Text>
											</View>
											<View style={styles.displayRow}>
												<Text>CGK</Text>
												<FontistoIcon style={styles.iconArrowCity} name='arrow-right' size={12} />
												<Text>JOG</Text>
											</View>
											<View style={[styles.floatRight, styles.displayRow]}>
												<Text style={styles.textDate}>{item.arrived_time}</Text>
											</View>
										</View>

										<View style={[styles.displayRow, {marginTop: 6} ]}>
											<View style={[styles.floatLeft, styles.displayRow]}>
												<Text style={styles.textDate}>19:00</Text>
											</View>
											<View style={[styles.floatRight, styles.displayRow]}>
												<Text style={styles.textDate}>20:00</Text>
											</View>
										</View>
									</Card>
								)}
							/>
						</Tab>
						<Tab
							heading={
								<TabHeading style={{ backgroundColor: '#fff' }}>
									<Text style={{ color: '#000' }}>Selesai</Text>
								</TabHeading>
							}
						>
							<Text>Selesai</Text>
						</Tab>
						<Tab 
							heading={
								<TabHeading style={{ backgroundColor: '#fff' }}>
									<Text style={{ color: '#000' }}>Dibatalkan</Text>
								</TabHeading>
							}
						>
							<Text>Dibatalkan</Text>
						</Tab>
					</Tabs>
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
	floatLeft:{
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
	iconArrowCity:{
		marginHorizontal: 6,
		alignSelf: 'center',
		color: '#ff9800'
	}
})