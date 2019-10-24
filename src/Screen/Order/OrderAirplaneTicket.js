import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Switch,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
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
    DatePicker,
    Icon
} from 'native-base'
import { NavigationEvents } from 'react-navigation'
import Dash from 'react-native-dash'
import Modal from 'react-native-modalbox'
import { Col, Row, Grid } from 'react-native-easy-grid'
import ScrollPicker from 'react-native-wheel-scroll-picker'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class OrderAirPlaneTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRoundTrip: false,
            from_airport_id: '',
            from_airport_city: 'Jakarta',
            from_airport_code: 'JKT',
            to_airport_id: '',
            to_airport_city: 'Bali',
            to_airport_code: 'BLI',
            departure_time: new Date(),
            modalVisible: false,
            numberOfAdults: 1,
            numberOfKids: 0,
            numberOfBabies: 0,
            adults: [
                1, 2, 3, 4, 5, 6, 7
            ],
            kids: [
                0, 1, 2, 3, 4, 5, 6,
            ],
            babies: [
                0, 1, 2, 3, 4
            ]
        }
    }

    componentDidMount() {

    }

    async getParam() {
        await this.setState({
            from_airport_id: this.props.navigation.getParam('from_airport_id', this.state.from_airport_id),
            from_airport_city: this.props.navigation.getParam('from_airport_city', this.state.from_airport_city),
            from_airport_code: this.props.navigation.getParam('from_airport_code', this.state.from_airport_code),
            to_airport_id: this.props.navigation.getParam('to_airport_id', this.state.to_airport_id),
            to_airport_city: this.props.navigation.getParam('to_airport_city', this.state.to_airport_city),
            to_airport_code: this.props.navigation.getParam('to_airport_code', this.state.to_airport_code)
        })
    }

    setDate(date) {
        this.setState({
            departure_time: date
        })
        console.log(this.state.departure_time)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <>
                <NavigationEvents
                    onDidFocus={payload => this.getParam()}
                />

                <Modal style={[styles.modal]} position={"bottom"} ref={"modal"} swipeArea={20}>
                    <Grid>
                        <Col style={{ backgroundColor: '#fff', height: 200 }}>
                            <View style={{ padding: 12 }}>
                                <Text>Dewasa 12+ Tahun</Text>
                            </View>
                            <ScrollPicker
                                dataSource={this.state.adults}
                                selectedIndex={1}
                                renderItem={(data, index, isSelected) => {
                                    //
                                }}
                                onValueChange={async (data, selectedIndex) => {
                                    await this.setState({
                                        numberOfAdults: this.state.adults[selectedIndex]
                                    })
                                    console.log(this.state.numberOfAdults)
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
                                <Text>Anak - anak 2-11 tahun</Text>
                            </View>
                            <ScrollPicker
                                dataSource={this.state.kids}
                                selectedIndex={1}
                                renderItem={(data, index, isSelected) => {
                                    //
                                }}
                                onValueChange={async (data, selectedIndex) => {
                                    await this.setState({
                                        numberOfKids: this.state.kids[selectedIndex]
                                    })
                                    console.log(this.state.numberOfKids)
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
                            <View style={{ padding: 12, marginBottom: 18.5 }}>
                                <Text>{'Bayi < 2 tahun'}</Text>
                            </View>
                            <ScrollPicker
                                dataSource={this.state.babies}
                                selectedIndex={1}
                                renderItem={(data, index, isSelected) => {
                                    //
                                }}
                                onValueChange={async (data, selectedIndex) => {
                                    await this.setState({
                                        numberOfBabies: this.state.babies[selectedIndex]
                                    })
                                    console.log(this.state.numberOfBabies)
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
                            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Pesan Tiket Pesawat</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{ marginTop: 12, paddingHorizontal: 12 }}>
                        <Card style={{ borderRadius: 6 }}>
                            <View style={{ padding: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Left>
                                        <Text>Pulang Pergi ?</Text>
                                    </Left>
                                    <Right>
                                        <Switch
                                            onValueChange={(val) => this.setState({ isRoundTrip: val })}
                                            value={this.state.isRoundTrip} />
                                    </Right>
                                </View>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Left style={{ alignItems: 'center' }}>
                                        <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('SearchAirPortFrom')} style={{ alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Asal</Text>
                                            <Text style={styles.textCodeName}>{this.state.from_airport_code}</Text>
                                            <Text style={styles.textValue}>{this.state.from_airport_city}</Text>
                                        </TouchableOpacity>
                                    </Left>
                                    <Icon style={{ color: '#FFA40C', alignSelf: 'center' }} size={20} type='FontAwesome5' name='exchange-alt' />
                                    <Right style={{ alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchAirPortTo')} style={{ alignItems: 'center' }}>
                                            <Text style={styles.textTitle}>Tujuan</Text>
                                            <Text style={styles.textCodeName}>{this.state.to_airport_code}</Text>
                                            <Text style={styles.textValue}>{this.state.to_airport_city}</Text>
                                        </TouchableOpacity>
                                    </Right>
                                </View>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Text style={styles.textTitle}>Berangkat</Text>
                                {/* <Text style={styles.textValue}>Sel, 22 Okt 19</Text> */}
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
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

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.refs.modal.open()} style={{ alignItems: 'center' }}>
                                    <Text style={styles.textTitle}>Penumpang</Text>
                                    <Text style={styles.textValue}>1 Dewasa, 0 Bayi</Text>
                                </TouchableOpacity>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Button full style={{ alignItems: 'center', backgroundColor: '#FF681B', borderRadius: 6 }} onPress={() => this.props.navigation.navigate('ListAirplaneTicket')}>
                                    <Text>CARI TIKET</Text>
                                </Button>
                            </View>
                        </Card>

                        <Image source={require('../../Assets/Images/bg-order-airplane-ticket.png')} style={styles.trainImage} />

                    </Content>

                    <View style={styles.lastSeen}>
                        <Button light iconLeft style={{ borderRadius: 6 }} onPress={() => alert('test')}>
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
        backgroundColor: '#FB9D7B'
    },
    body: {
        flex: 1,
        backgroundColor: '#FB9D7B'
    },
    trainImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 70,
        marginTop: 20
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