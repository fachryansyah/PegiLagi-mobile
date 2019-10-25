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
import EntypoIcons from 'react-native-vector-icons/Entypo'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import Dash from 'react-native-dash'
export default class HistroyHotel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            historyHotel: [
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
                            <Text style={{ color: '#ffff', fontSize: 25, marginTop: 5 }}>
                                Terakhir dilihat
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, backgroundColor: '#d9a341', position: 'absolute' }}
                                transparent onPress={() => alert('Delete!')}>
                                <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={25} name={'delete-outline'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.historyHotel}
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
    cardStationIcon: {
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        paddingVertical: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hotelImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 100
    },
})