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
import Dash from 'react-native-dash'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
export default class ListTrainTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from_airport_id: '',
            to_airport_id: '',
            departure_time: '',
            isLoading: true,
            listKategori: [
                {
                    nameKategory: 'Semua'
                },
                {
                    nameKategory: 'PEYUK! PROMO'
                },
                {
                    nameKategory: 'Pasangan'
                },
                {
                    nameKategory: 'Family'
                },
                {
                    nameKategory: 'Mewah'
                },
                {
                    nameKategory: 'Hemat'
                },
            ],
            ListHotel: [
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
                },
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
                },
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
                },
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
                },
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
                },
                {
                    nameHotel: 'Hotel Permata Bogor',
                    location: 'Bogor Selatan, Bogor',
                    rating: '8.9',
                    levelNameRating: 'Sangat Baik',
                    price: 'Rp 910.000'
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
                            <Text style={{ color: '#ffff', fontSize: 15 }}>
                                Bogor
                            </Text>
                            <Text style={{ color: '#ffff', fontSize: 12 }}>
                                Jum, 25 Okt 2019 . 1 malam . 1 kamar
                            </Text>
                        </Col>
                    </Grid>
                </Header>
                <Content>
                    <View style={{ backgroundColor: '#ffc04d', paddingHorizontal: 10 }}>
                        <Grid style={{ marginBottom: 4 }}>
                            <Col>
                                <Dash style={{ width: '100%', height: 1 }} dashColor='#ffff' />
                            </Col>
                        </Grid>
                        <FlatList
                            horizontal={true}
                            data={this.state.listKategori}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => alert('Kategori!')}>
                                    <View style={styles.kategorList}>
                                        <View style={styles.cardKategoriList}>
                                            <Text style={{ color: '#f97432', paddingVertical: 3, paddingHorizontal: 10 }}>{item.nameKategory}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.ListHotel}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingHotel')}>
                                    <Card style={{ padding: 10 }}>
                                        <Grid>
                                            <Col style={{ width: '30%' }}>
                                                <Image source={require('../../Assets/Images/hotel-permata-bogor.jpg')} style={styles.hotelImage} />
                                            </Col>
                                            <Col style={{ width: '70%', paddingHorizontal: 10 }}>
                                                <Grid>
                                                    <Col>
                                                        <View style={{ backgroundColor: '#ffa500', paddingHorizontal: 5, width: 100 }}>
                                                            <Text style={{ fontSize: 10, color: '#ffff' }}><MaterialCommunityIcons style={[{ color: '#ffff' }]} size={12} name={'gift'} />       PEYUK! PROMO</Text>
                                                        </View>
                                                        <Text>{item.nameHotel}</Text>
                                                        <Text style={{ fontSize: 12 }}>Rating</Text>
                                                        <Text style={{ fontSize: 12 }}><EntypoIcons style={[{ color: '#818181' }]} size={12} name={'location-pin'} /> {item.location}</Text>
                                                    </Col>
                                                </Grid>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 14, color: '#f97432' }}>{item.rating}</Text>
                                                    <Text style={{ fontSize: 14, color: '#898989' }}> {item.levelNameRating}</Text>
                                                </View>
                                            </Col>
                                        </Grid>
                                        <Dash style={{ width: '100%', height: 1, marginVertical: 15 }} dashColor='#eaeaea' />
                                        <Grid>
                                            <Col>
                                                <Text style={{ fontSize: 14 }}>Harga Kamar</Text>
                                                <Text style={{ fontSize: 12 }}>per malam</Text>
                                            </Col>
                                            <Col style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 17, color: '#f97432' }}>{item.price}</Text>
                                                <Text style={{ fontSize: 10 }}>Harga termasuk pajak <AntDesignIcons size={10} name={'exclamationcircleo'} /></Text>
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
                            <TouchableOpacity onPress={() => alert('Filter')}>
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
                                        <Text style={{ marginLeft: 7, color: '#4d4f44', fontSize: 13 }}>Popularitas</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.colFooterMap}>
                            <TouchableOpacity onPress={() => alert('Peta!')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialCommunityIcons style={[{ color: '#ffff', marginTop: 5 }]} size={23} name={'google-maps'} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 7, color: '#ffff', fontSize: 20 }}>Peta</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        padding: 10
    },
    kategorList: {
        marginVertical: 5,
        marginRight: 5,
    },
    cardKategoriList: {
        borderRadius: 5,
        color: '#f97432',
        backgroundColor: '#ffff',
    },
    hotelImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 100
    },
    footer: {
        justifyContent: 'flex-end',
    },
    colFooter: {
        width: '33%',
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