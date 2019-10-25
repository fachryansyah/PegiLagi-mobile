import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
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
    Item,
    Label,
    Input,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Dash from 'react-native-dash'
export default class BookingTicketTrain extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Left>
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 20, marginTop: 7 }}>
                                Lengkapi Data
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, position: 'absolute' }}
                                transparent onPress={() => alert('More!')}>
                                <Feather style={[{ color: '#ffff' }]} size={27} name={'more-horizontal'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text style={{ color: '#7f7f7f', fontSize: 15, paddingVertical: 7, paddingHorizontal: 15 }}>Pesanan Anda</Text>
                        <View style={{ backgroundColor: '#ffff', padding: 20 }}>
                            <Grid>
                                <Col style={{ width: '80%' }}>
                                    <Text style={{ color: '#4d4f44' }}>
                                        <MaterialCommunityIcons style={[{ color: '#f97432' }]} size={16} name={'train'} /> Gambir <MaterialCommunityIcons size={15} name={'arrow-right'} /> Yogyakarta
                                    </Text>
                                </Col>
                                <Col style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => alert('Detail!')}>
                                        <Text style={{ fontSize: 14, color: '#FF681B' }}>DETAIL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                            <Grid style={{ marginVertical: 10 }}>
                                <Col>
                                    <Text style={{ color: '#898989' }}>Sekali Jalan</Text>
                                </Col>
                            </Grid>
                            <Dash style={{ width: '100%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#4d4f44' }}>TAKSAKA 52</Text>
                                </Col>
                            </Grid>
                            <Grid style={{ marginVertical: 5 }}>
                                <Col>
                                    <Text style={{ color: '#4d4f44', fontSize: 12 }}>Jum,25 Okt 2019, 11:20 (GMR) <MaterialCommunityIcons size={15} name={'arrow-right'} /> 12:50 (YK) </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#898989' }}>Eksekutif (H)</Text>
                                </Col>
                            </Grid>
                        </View>
                        <Text style={{ color: '#7f7f7f', fontSize: 15, paddingTop: 10, paddingBottom: 5, paddingHorizontal: 15 }}>Data Pemesan</Text>
                        <View style={{ backgroundColor: '#ffff', padding: 20 }}>
                            <Grid>
                                <Col style={{ width: '20%' }}>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 50 }}
                                        source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                                    />
                                </Col>
                                <Col style={{ width: '80%' }}>
                                    <Text style={{ color: '#4d4f44' }}>Anto Ardy</Text>
                                    <Text style={{ color: '#898989' }}>indrajuni@gmail.com</Text>
                                </Col>
                            </Grid>
                            <Dash style={{ width: '100%', height: 1, marginVertical: 20 }} dashColor='#d9d9d9' />
                            <Item floatingLabel>
                                <Label style={{ color: '#898989' }}>Nomor telepon</Label>
                                <Input />
                            </Item>
                        </View>
                        <Text style={{ color: '#4d4f44', fontSize: 18, paddingVertical: 10, paddingHorizontal: 15 }}>Data Penumpang</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerDataTrain')}>
                            <View style={{ backgroundColor: '#ffff', padding: 20 }} >
                                <Grid>
                                    <Col style={{ width: '15%' }}>
                                        <Feather style={[{ color: '#7f7f7f' }]} size={27} name={'user'} />
                                    </Col>
                                    <Col style={{ width: '75%' }}>
                                        <Text style={{ color: '#4d4f44' }}>Isi data penumpang1</Text>
                                        <Text style={{ color: '#898989' }}>Dewasa</Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <Feather style={{ color: '#f97432' }} size={25} name={'arrow-right'} />
                                    </Col>
                                </Grid>
                            </View>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#f5fafd', padding: 20 }}>
                            {/* <TouchableOpacity onPress={() => alert('PILIH KURSI!')} style={{ backgroundColor: '#ffff', borderColor: '#f97432', marginTop: 15 }}>
                                <Text style={{ fontSize: 16, color: '#f97432', textAlign: "center", paddingVertical: 10 }}>PILIH KURSI</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Payment')} style={{ backgroundColor: '#f97432', marginTop: 15 }}>
                                <Text style={{ fontSize: 16, color: '#ffff', textAlign: "center", paddingVertical: 10 }}>LANJUT KE PEMBAYARAN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f97432',
        paddingTop: 7,
        paddingBottom: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingVertical: 10
    },
    colIconRight: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})