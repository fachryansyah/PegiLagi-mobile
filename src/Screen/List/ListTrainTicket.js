import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
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
    Card
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
export default class ListTrainTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ListTrainTicket: [
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
                {
                    nameTrain: 'ARGO PARAHYANGAN 22',
                    departureTime: '14:00',
                    travelTime: '1j 40m',
                    arrivedTime: '15:40',
                    price: 'Rp 1.418.700',
                    codeNameFromAirport: 'CGK',
                    codeNameToAirport: 'BTJ',
                    passenger: 'per orang',
                    available: 'Tersedia',
                    classTrain: 'Kelas Ekonomi (c)'
                },
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('OrderTrainTicket')}>
                                < Left >
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 15 }}>
                                Gambir (GMR) <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={15} name={'arrow-right'} /> Bandung (BD)
                            </Text>
                            <Text style={{ color: '#ffff', fontSize: 12 }}>
                                25 Okt 2019 . 1 Penumpang
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, backgroundColor: '#d58a00', position: 'absolute' }}
                                transparent onPress={() => alert('Calender!')}>
                                <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={25} name={'calendar-range-outline'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.ListTrainTicket}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => alert('Pesan Tiket Kereta!')}>
                                    <Card style={styles.cardListTrainTicket}>
                                        <Grid>
                                            <Col style={{ width: '15%' }}>
                                                <Image
                                                    style={{ width: 20, height: 20, backgroundColor: '#ffff' }}
                                                    source={require('../../Assets/Images/pt-kai.png')}
                                                />
                                            </Col>
                                            <Col>
                                                <Text style={{ fontSize: 13 }}>
                                                    {item.nameTrain}
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    {item.departureTime}
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '22%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    {item.travelTime}
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    {item.arrivedTime}
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
                                                    {item.codeNameFromAirport}
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '22%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                    {item.codeNameToAirport}
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '30%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                    {item.passenger}
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid>
                                            <Col style={{ width: '62%' }}>
                                            </Col>
                                            <Col style={{ width: '30%' }}>
                                                <Text style={{ fontSize: 13, color: '#81d135' }}>
                                                    {item.available}
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid style={{ marginTop: 10 }}>
                                            <Col style={{ width: '50%' }}>
                                                <Text style={{ fontSize: 11, color: '#898989' }}>
                                                    <SimpleLineIcons style={[{ color: '#898989' }]} size={12} name={'handbag'} /> {item.classTrain}
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
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffa500',
        paddingTop: 7,
        paddingBottom: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10
    },
    cardListTrainTicket: {
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