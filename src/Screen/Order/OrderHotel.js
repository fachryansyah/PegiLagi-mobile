import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Card,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Grid,
    Col,
    Icon,
    DatePicker
} from 'native-base'
import Dash from 'react-native-dash'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modalbox'
import ScrollPicker from 'react-native-wheel-scroll-picker'

export default class OrderHotel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRoundTrip: false,
            modalVisible: false,
            numberOfGuest: 1,
            numberOfRoom: 0,
            guest: [
                1, 2, 3, 4, 5, 6, 7
            ],
            room: [
                1, 2, 3, 4, 5, 6, 7
            ],
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <>

                <Modal style={[styles.modal]} position={"bottom"} ref={"modal"} swipeArea={20}>
                    <Grid>
                        <Col style={{ backgroundColor: '#fff', height: 200 }}>
                            <View style={{ padding: 12 }}>
                                <Text>Total tamu</Text>
                            </View>
                            <ScrollPicker
                                dataSource={this.state.guest}
                                selectedIndex={1}
                                renderItem={(data, index, isSelected) => {
                                    //
                                }}
                                onValueChange={async (data, selectedIndex) => {
                                    await this.setState({
                                        numberOfGuest: this.state.guest[selectedIndex]
                                    })
                                    console.log(this.state.numberOfGuest)
                                }}
                                wrapperHeight={140}
                                wrapperWidth={150}
                                wrapperBackground={'#fff'}
                                itemHeight={40}
                                highlightColor={'#d8d8d8'}
                                highlightBorderWidth={1}
                                activeItemColor={'#222121'}
                                itemColor={'#B4B4B4'}
                            />
                        </Col>
                        <Col style={{ backgroundColor: '#fff', height: 200 }}>
                            <View style={{ padding: 12 }}>
                                <Text>Kamar</Text>
                            </View>
                            <ScrollPicker
                                dataSource={this.state.room}
                                selectedIndex={1}
                                renderItem={(data, index, isSelected) => {
                                    //
                                }}
                                onValueChange={async (data, selectedIndex) => {
                                    await this.setState({
                                        numberOfRoom: this.state.room[selectedIndex]
                                    })
                                    console.log(this.state.numberOfRoom)
                                }}
                                wrapperHeight={140}
                                wrapperWidth={150}
                                wrapperBackground={'#fff'}
                                itemHeight={40}
                                highlightColor={'#d8d8d8'}
                                highlightBorderWidth={1}
                                activeItemColor={'#222121'}
                                itemColor={'#B4B4B4'}
                            />
                        </Col>
                    </Grid>
                    <Button warning full style={{ margin: 12, backgroundColor: '#FF681B', borderRadius: 4 }} onPress={() => this.refs.modal.close()}>
                        <Text>SIMPAN</Text>
                    </Button>
                </Modal>

                <Container style={styles.body}>
                    <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Pesan Kamar Hotel</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{ marginTop: 12, paddingHorizontal: 12 }}>
                        <Card style={{ borderRadius: 6 }}>
                            <View style={{ padding: 12 }}>
                                <Grid>
                                    <Col style={{ width: '10%', justifyContent: 'center' }}>
                                        <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={20} name={'search'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ fontSize: 12, marginVertical: 7 }}>Tujuan</Text>
                                        <TouchableOpacity onPress={() => alert('Lokasi / Nama Hotel')}>
                                            <Text style={{ color: '#818181' }}>Lokasi / Nama Hotel</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col style={{ justifyContent: 'center' }}>
                                        <MaterialCommunityIcons style={[{ color: '#FF681B' }]} size={20} name={'crosshairs-gps'} />
                                    </Col>
                                </Grid>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12 }}>
                                <Grid>
                                    <Col>
                                        <View style={{ padding: 12, alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Check-in</Text>
                                            {/* <Text style={styles.textValue}>Sel, 22 Okt 19</Text> */}
                                            <DatePicker
                                                defaultDate={new Date()}
                                                minimumDate={new Date()}
                                                maximumDate={new Date(2019, 11, 30)}
                                                locale={"id"}
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"default"}
                                                placeHolderText="Select date"
                                                textStyle={styles.textValue}
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={(date) => this.setDate(date)}
                                                disabled={false}
                                            />
                                        </View>
                                    </Col>
                                    <Col>
                                        <View style={{ padding: 12, alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Check-out</Text>
                                            {/* <Text style={styles.textValue}>Sel, 22 Okt 19</Text> */}
                                            <DatePicker
                                                defaultDate={new Date()}
                                                minimumDate={new Date()}
                                                maximumDate={new Date(2019, 11, 30)}
                                                locale={"id"}
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"default"}
                                                placeHolderText="Select date"
                                                textStyle={styles.textValue}
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={(date) => this.setDate(date)}
                                                disabled={false}
                                            />
                                        </View>
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col style={{ alignItems: 'center' }}>
                                        <Text style={{ color: '#818181' }}>
                                            <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={20} name={'moon-o'} /> 1 malam
                                        </Text>
                                    </Col>
                                </Grid>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Grid>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.refs.modal.open()} style={{ alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Total tamu</Text>
                                            <Text style={styles.textValue}>2 Tamu</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.refs.modal.open()} style={{ alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Kamar</Text>
                                            <Text style={styles.textValue}>1 Kamar</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />


                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Button full style={{ alignItems: 'center', backgroundColor: '#f97432', borderRadius: 6 }} onPress={() => this.props.navigation.navigate('ListHotel')}>
                                    <Text>CARI KAMAR</Text>
                                </Button>
                            </View>
                        </Card>
                        <Grid style={{ paddingHorizontal: 5 }}>
                            <Col>
                                <TouchableOpacity onPress={() => alert('Akomodasi Favorit')}>
                                    <Image source={require('../../Assets/Images/bg-order-hotel-ticket.png')} style={styles.hotelImage} />
                                </TouchableOpacity>
                            </Col>
                        </Grid>

                    </Content>

                    <View style={styles.lastSeen}>
                        <Button light iconLeft style={{ borderRadius: 6 }} onPress={() => this.props.navigation.navigate('HistoryHotel')}>
                            <Text style={{ color: '#696969' }}>Terakhir dilihat</Text>
                        </Button>
                    </View>
                </Container>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffc04d'
    },
    body: {
        flex: 1,
        backgroundColor: '#ffc04d'
    },
    hotelImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 100,
        marginTop: 20,
        borderRadius: 7
    },
    textTitle: {
        fontSize: 14,
        color: '#818181'
    },
    textCodeName: {
        fontSize: 22
    },
    textValue: {
        fontSize: 16
    },
    lastSeen: {
        padding: 12,
        justifyContent: 'flex-end'
    },
    modal: {
        height: 250
    },
})