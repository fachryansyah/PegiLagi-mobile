import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import {
    Container,
    Header,
    Content,
    Text,
    Col,
    Grid,
    Button,
    Left,
    Icon,
    Card,
    Spinner
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Moment from 'moment-timezone'
import Http from '../../Helpers/Http'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class ListAirplaneTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            from_airport_id: '',
            to_airport_id: '',
            departure_time: '',
            isLoading: true,
            tickets: [
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
                {
                    nameAirPlane: 'Garuda Indonesia',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    transit: 'Langsung',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    baggage: '20 kg',
                    food: 'Makanan'
                },
            ]
        }
    }

    componentDidMount(){
        this.getParam()
    }

    async getParam() {
        await this.setState({
            from_airport_id: this.props.navigation.getParam('from_airport_id', this.state.from_airport_id),
            to_airport_id: this.props.navigation.getParam('to_airport_id', this.state.to_airport_id),
            departure_time: this.props.navigation.getParam('departure_time', this.state.departure_time)
        })
        this.getTicketData(this.state.from_airport_id, this.state.to_airport_id, this.state.departure_time)
    }

    async getTicketData(from, to, date){
        await Http.get(`/plane-ticket/search?from=${from}&to=${to}&date=${date}`)
        .then((res) => {
            console.log(res.data.data.results)
            this.setState({
                tickets: res.data.data.results,
                isLoading: false
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    __renderListTicket(){
        if (this.state.isLoading) {
            return(
                <View style={{ height: SCREEN_HEIGHT * 0.9, justifyContent: 'center' }}>
                    <Spinner color='red' />
                </View>
            )
        }else{
            return(
                <FlatList
                    data={this.state.tickets}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, key }) => (
                        <TouchableOpacity onPress={() => alert('Pesan Tiket Garuda!')}>
                            <Card style={styles.cardListAirplaneTicket}>
                                <Grid>
                                    <Col style={{ width: '15%' }}>
                                        <Image
                                            style={{ width: 20, height: 20 }}
                                            source={require('../../Assets/Images/garuda.png')}
                                        />
                                    </Col>
                                    <Col>
                                        <Text style={{ fontSize: 13 }}>
                                            {item.plane.name}
                                        </Text>
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 13 }}>
                                            {Moment.tz(item.departure_time, 'Asia/Jakarta').format('LT')}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '22%' }}>
                                        <Text style={{ fontSize: 13 }}>
                                            {Moment(item.arrived_time).diff(Moment(item.departure_time), 'hours')} JAM
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 13 }}>
                                            {Moment.tz(item.arrived_time, 'Asia/Jakarta').format('LT')}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 13, color: '#ffa500' }}>
                                            {item.price}
                                        </Text>
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 13, color: '#898989' }}>
                                            {item.fromAirport.code_name}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '22%' }}>
                                        <Text style={{ fontSize: 13, color: '#898989' }}>
                                            {item.transit}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 13, color: '#898989' }}>
                                            {item.toAirport.code_name}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 13, color: '#898989' }}>
                                            per orang
                                        </Text>
                                    </Col>
                                </Grid>
                                <Grid style={{ marginTop: 10 }}>
                                    <Col style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 11, color: '#898989' }}>
                                            <SimpleLineIcons style={[{ color: '#898989' }]} size={12} name={'handbag'} /> {item.baggage}
                                        </Text>
                                    </Col>
                                    <Col style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 11, color: '#898989' }}>
                                            <MaterialCommunityIcons style={[{ color: '#898989' }]} size={12} name={'silverware-fork-knife'} /> Makanan
                                        </Text>
                                    </Col>
                                    <Col style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity onPress={() => alert('Detail!')}>
                                            <Text style={{ fontSize: 14, color: '#FF681B' }}>DETAIL</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            )
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('OrderAirplaneTicket')}>
                                <Left>
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 15 }}>
                                Jakarta (JKT) <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={15} name={'arrow-right'} /> Surabaya (SUB)
                            </Text>
                            <Text style={{ color: '#ffff', fontSize: 12 }}>
                                25 Okt 2019 . 1 Penumpang
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, backgroundColor: '#e08b6c', position: 'absolute' }}
                                transparent onPress={() => alert('Calender!')}>
                                <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={25} name={'calendar-range-outline'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        {this.__renderListTicket()}
                    </View>
                </Content>

                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.colFooter}>
                            <TouchableOpacity onPress={() => alert('Filter!')}>
                                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                    <MaterialCommunityIcons style={[{ color: '#898989' }]} size={23} name={'format-list-bulleted'} />
                                    <Text style={{ marginLeft: 7, color: '#4d4f44' }}>Filter</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.colFooter}>
                            <TouchableOpacity onPress={() => alert('Filter!')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialCommunityIcons style={[{ color: '#898989', marginTop: 5 }]} size={23} name={'format-list-numbered'} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 7, color: '#4d4f44', fontSize: 12 }}>Urutkan</Text>
                                        <Text style={{ marginLeft: 7, color: '#4d4f44' }}>Termurah</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fb9d7b',
        paddingTop: 7,
        paddingBottom: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10
    },
    cardListAirplaneTicket: {
        padding: 10
    },
    footer: {
        justifyContent: 'flex-end',
    },
    colFooter: {
        width: '50%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 5
    }
})