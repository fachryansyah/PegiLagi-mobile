import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
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
} from 'native-base';
import EntypoIcons from 'react-native-vector-icons/Entypo'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Dash from 'react-native-dash'
export default class BookingTicketTrain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardImage: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ],
            listRating: [
                {
                    nameRating: 'Kenyaman',
                    score: '8.9'
                },
                {
                    nameRating: 'Kebersihan',
                    score: '7.8'
                },
                {
                    nameRating: 'Pelayanan',
                    score: '8.0'
                },
                {
                    nameRating: 'Lokasi',
                    score: '8.6'
                },
                {
                    nameRating: 'Harga',
                    score: '9.0'
                }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                < Left >
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 17 }}>
                                Hotel Permata Bogor
                            </Text>
                            <Text style={{ color: '#ffff', fontSize: 13 }}>
                                Bogor Tengah, Bogor
                            </Text>
                        </Col>
                    </Grid>
                </Header>
                <Content>
                    <View>
                        <Grid>
                            <Col>
                                <Image source={require('../../Assets/Images/bg-order-hotel-ticket.png')} style={styles.hotelImageMain} />
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.cardImage}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item, key }) => (
                                        <Col style={{ width: 100, margin: 1 }}>
                                            <Image source={require('../../Assets/Images/bg-order-hotel-ticket.png')} style={styles.hotelImageCard} />
                                        </Col>
                                    )}
                                />
                            </Col>
                        </Grid>
                    </View>
                    <View style={styles.container}>
                        <View style={{ backgroundColor: '#ffff', padding: 20, marginBottom: 20 }}>
                            <Grid>
                                <Col style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 20, color: '#4e5046' }}>Hotel Permata Bogor</Text>
                                </Col>
                                <Col style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <View style={styles.cardStationIcon}>
                                        <Text style={{ color: '#969696' }}>
                                            Hotel
                                        </Text>
                                    </View>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 12 }}><EntypoIcons style={[{ color: '#f97432' }]} size={15} name={'location-pin'} /> Bogor Selatan, Bogor</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={{ fontSize: 14, color: '#f97432' }}>8.9 </Text>
                                        <Text style={{ fontSize: 14, color: '#898989' }}> Sangat Baik</Text>
                                    </View>
                                </Col>
                            </Grid>
                        </View>
                        <View style={{ paddingHorizontal: 10, marginBottom: 20 }}>
                            <Card style={{ paddingVertical: 15, paddingHorizontal: 5 }}>
                                <Grid>
                                    <Col>
                                        <Text style={{ fontSize: 13, color: '#898989', textAlign: 'center' }}> Check-in</Text>
                                        <Text style={{ fontSize: 14, color: '#f97432', textAlign: 'center' }}>25 Okt </Text>
                                    </Col>
                                    <EntypoIcons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'arrow-right'} />
                                    <Col>
                                        <Text style={{ fontSize: 13, color: '#898989', textAlign: 'center' }}> Check-out</Text>
                                        <Text style={{ fontSize: 14, color: '#f97432', textAlign: 'center' }}>25 Okt </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{ fontSize: 13, color: '#898989', textAlign: 'center' }}> Total tamu</Text>
                                        <Text style={{ fontSize: 14, color: '#f97432', textAlign: 'center' }}>4 </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{ fontSize: 13, color: '#898989', textAlign: 'center' }}> kamar</Text>
                                        <Text style={{ fontSize: 14, color: '#f97432', textAlign: 'center' }}>2 </Text>
                                    </Col>
                                </Grid>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: '#ffff', paddingHorizontal: 20, paddingVertical: 15, marginBottom: 20 }}>
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#4f504a' }}><FontAwesome5Icons style={[{ color: '#d7d7d7', alignSelf: 'center' }]} size={18} name={'concierge-bell'} />  Fasilitas</Text>
                                </Col>
                                <Col style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#f97432' }}>Semua Fasilitas <EntypoIcons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'arrow-right'} /> </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Card style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                                        <FontAwesome5Icons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'wifi'} />
                                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>Wi-Fi</Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                                        <FontAwesome5Icons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'diagnoses'} />
                                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>Spa</Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                                        <FontAwesome5Icons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'utensil-spoon'} />
                                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>Makanan</Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                                        <FontAwesome5Icons style={[{ color: '#f97432', alignSelf: 'center' }]} size={18} name={'parking'} />
                                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>Parkir</Text>
                                    </Card>
                                </Col>
                            </Grid>
                            <Dash style={{ width: '100%', height: 1, marginVertical: 25 }} dashColor='#d9d9d9' />
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#4f504a', marginBottom: 15 }}><FontAwesome5Icons style={[{ color: '#d7d7d7', alignSelf: 'center' }]} size={18} name={'book-open'} />  Tentang</Text>
                                    <Text style={{ color: '#4f504a' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </Col>
                            </Grid>
                        </View>
                        <View style={{ backgroundColor: '#ffff', paddingHorizontal: 20, paddingVertical: 15, marginBottom: 20 }}>
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#4f504a', marginBottom: 15 }}><MaterialCommunityIcons style={[{ color: '#d7d7d7', alignSelf: 'center' }]} size={20} name={'star-circle-outline'} />  Rating</Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col style={{ width: '15%' }}>
                                    <View style={{ backgroundColor: '#fea501', borderRadius: 60, paddingVertical: 10 }}>
                                        <Text style={{ color: '#ffff', textAlign: 'center', fontSize: 20 }}>8.0</Text>
                                    </View>
                                </Col>
                                <Col style={{ paddingHorizontal: 20 }}>
                                    <Text style={{ color: '#f97432', fontSize: 20 }}>Sangat Baik</Text>
                                    <Text style={{ color: '#4d4e48' }}>Berdasarkan 112 ulasan</Text>
                                </Col>
                            </Grid>
                            <Grid style={{ marginTop: 15 }}>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.listRating}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item, key }) => (
                                        <Col>
                                            <Card style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                                                <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.nameRating}</Text>
                                                <Text style={{ fontSize: 14, color: '#f97432', textAlign: 'center', marginTop: 4 }}>{item.score}</Text>
                                            </Card>
                                        </Col>
                                    )}
                                />

                            </Grid>
                        </View>
                    </View>
                </Content>

                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 7 }}>
                        <View style={{ width: '70%' }}>
                            <Grid>
                                <Col>
                                    <Text style={{ fontSize: 13, color: '#898989' }}> Harga mulai dari</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#f97432', fontSize: 16 }}> Rp 427.500</Text>
                                        <Text style={{ fontSize: 11, color: '#898989', alignSelf: 'center' }}> per kamar per malam</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, marginLeft: 5 }}>Harga termasuk pajak <AntDesignIcons size={10} name={'exclamationcircleo'} /></Text>
                                </Col>
                            </Grid>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Button full style={{ backgroundColor: '#f97432', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('PassengerDataHotel')}>
                                <Text style={{ fontSize: 14 }}>PESAN</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffc04d',
        paddingTop: 7,
        paddingBottom: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    hotelImageMain: {
        width: '100%',
        resizeMode: 'stretch',
        height: 170,
    },
    hotelImageCard: {
        width: '100%',
        resizeMode: 'stretch',
        height: 100,
    },
    cardStationIcon: {
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        justifyContent: 'flex-end',
        paddingVertical: 15
    },
    colFooter: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 5
    },
    colFooterMap: {
        backgroundColor: '#f97432',
        width: '33%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 5
    },
})