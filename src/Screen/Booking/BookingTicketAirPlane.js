import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Switch
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
    Card,
    Spinner
} from 'native-base'
import { connect } from 'react-redux'
import { getPassanger } from '../../Redux/Actions/Booking'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Dash from 'react-native-dash'
import Moment from 'moment-timezone'
import Http from '../../Helpers/Http'


class BookingTicketAirPlane extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRoundTrip: false,
            isLoading: false
        }
    }

    async orderTicket(){

        this.setState({
            isLoading: true
        })

        const ticket = this.props.navigation.getParam('ticket')

        await Http.post('/plane-ticket/order', JSON.stringify({
            plane_ticket_id: ticket.id,
            passengers: this.props.booking.listPassanger
        }),{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            if (res.data.status == 200) {
               this.props.navigation.navigate('Payment', { booking: res.data.data })
            }
            this.setState({
                isLoading: false
            })
        })
        .catch((err) => {
            console.log(err.message)
            this.setState({
                isLoading: false
            })
        })
    }

    __renderProfile(){
        if (this.props.auth.isAuthenticate) {
            return(
                <View style={{ backgroundColor: '#ffff', padding: 20 }}>
                    <Grid>
                        <Col style={{ width: '20%' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 50 }}
                                source={{ uri: this.props.auth.user.avatar }}
                            />
                        </Col>
                        <Col style={{ width: '80%' }}>
                            <Text style={{ color: '#4d4f44' }}>{this.props.auth.user.fullname}</Text>
                            <Text style={{ color: '#898989' }}>{this.props.auth.user.email}</Text>
                        </Col>
                    </Grid>
                    <Dash style={{ width: '100%', height: 1, marginVertical: 20 }} dashColor='#d9d9d9' />
                    {/* <Item floatingLabel>
                        <Label style={{ color: '#898989' }}>Nomor telepon</Label>
                        <Input />
                    </Item> */}
                </View>
            )
        }else{
            return(
                <View style={{ backgroundColor: '#ffff', padding: 20 }}>
                    <Grid>
                        <Col style={{ alignItems: 'center' }}>
                            <Text>Anda harus masuk terlebih dahulu</Text>
                        </Col>
                    </Grid>
                    <Dash style={{ width: '100%', height: 1, marginVertical: 20 }} dashColor='#d9d9d9' />
                </View>
            )
        }
    }

    __renderListPassanger(){
        if (this.props.auth.isAuthenticate) {
            let elementAdults = []
            let elementKids = []
            let elementBabies = []
            

            for (let i = 0; i < this.props.booking.passangers.adults; i++) {
                elementAdults.push(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerDataAirplane', {index: i} )} key={i}>
                        <View style={{ backgroundColor: '#ffff', padding: 20, marginBottom: 10 }}>
                            <Grid>
                                <Col style={{ width: '15%' }}>
                                    <Feather style={[{ color: '#7f7f7f' }]} size={27} name={'user'} />
                                </Col>
                                <Col style={{ width: '75%' }}>
                                    <Text style={{ color: '#4d4f44' }}>Isi data penumpang {i+1}</Text>
                                    <Text style={{ color: '#898989' }}>Dewasa</Text>
                                </Col>
                                <Col style={styles.colIconRight}>
                                    <Feather style={{ color: '#f97432' }} size={25} name={'arrow-right'} />
                                </Col>
                            </Grid>
                        </View>
                    </TouchableOpacity>
                )
            }

            for(let i = 0; i < this.props.booking.passangers.kids;i++){
                elementKids.push(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerDataAirplane', {passanger: 'kids'} )} key={i}>
                        <View style={{ backgroundColor: '#ffff', padding: 20, marginBottom: 10 }}>
                            <Grid>
                                <Col style={{ width: '15%' }}>
                                    <Feather style={[{ color: '#7f7f7f' }]} size={27} name={'user'} />
                                </Col>
                                <Col style={{ width: '75%' }}>
                                    <Text style={{ color: '#4d4f44' }}>Isi data Anak - anak {i+1}</Text>
                                    <Text style={{ color: '#898989' }}>Anak - anak</Text>
                                </Col>
                                <Col style={styles.colIconRight}>
                                    <Feather style={{ color: '#f97432' }} size={25} name={'arrow-right'} />
                                </Col>
                            </Grid>
                        </View>
                    </TouchableOpacity>
                )
            }

            for(let i = 0; i < this.props.booking.passangers.babies; i++){
                elementKids.push(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerDataAirplane',  {passanger: 'baby'} )} key={i}>
                        <View style={{ backgroundColor: '#ffff', padding: 20, marginBottom: 10 }}>
                            <Grid>
                                <Col style={{ width: '15%' }}>
                                    <Feather style={[{ color: '#7f7f7f' }]} size={27} name={'user'} />
                                </Col>
                                <Col style={{ width: '75%' }}>
                                    <Text style={{ color: '#4d4f44' }}>Isi data Bayi {i+1}</Text>
                                    <Text style={{ color: '#898989' }}>Bayi</Text>
                                </Col>
                                <Col style={styles.colIconRight}>
                                    <Feather style={{ color: '#f97432' }} size={25} name={'arrow-right'} />
                                </Col>
                            </Grid>
                        </View>
                    </TouchableOpacity>
                )
            }
            

            return(
                <>
                    <Text style={{ color: '#4d4f44', fontSize: 18, paddingVertical: 10, paddingHorizontal: 15 }}>Data Penumpang</Text>
                    {elementAdults}
                    {elementKids}
                    {elementBabies}
                </>
            )
        }else{
            return(
                <View>
                    
                </View>
            )
        }
    }

    __renderButtonLoading(){
        if (this.state.isLoading) {
            return(
                <>
                    <Spinner color='#f97432' />
                </>
            )
        }else{
            return(
                <TouchableOpacity onPress={() => this.orderTicket()} style={{ backgroundColor: '#f97432', marginTop: 15 }}>
                    <Text style={{ fontSize: 18, color: '#ffff', textAlign: "center", paddingVertical: 10 }}>LANJUT</Text>
                </TouchableOpacity>
            )
        }
    }

    __renderButtonNext(){
        if (this.props.auth.isAuthenticate) {
            return(
                <>
                    <Grid>
                        <Col>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#898989', fontSize: 13 }}>Dengan menekan tombol </Text>
                                <Text style={{ color: '#4b4b43', fontSize: 15 }}>LANJUT, </Text>
                                <Text style={{ color: '#898989', fontSize: 13 }}>saya setuju dengan </Text>
                            </View>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => alert('Kebijakan Privasi!')}>
                                    <Text style={{ color: '#f97432', fontSize: 13 }}>Kebijakan Privasi </Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#898989', fontSize: 13 }}>dan </Text>
                                <TouchableOpacity onPress={() => alert('Ketentuan Penggunaan!')}>
                                    <Text style={{ color: '#f97432', fontSize: 13 }}>Ketentuan Penggunaan </Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#898989', fontSize: 13 }}>Pegilagi </Text>
                            </View>
                        </Col>
                    </Grid>
                    {this.__renderButtonLoading()}
                </>
            )
        }else{
            return(
                <>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ backgroundColor: '#f97432', marginTop: 15 }}>
                        <Text style={{ fontSize: 18, color: '#ffff', textAlign: "center", paddingVertical: 10 }}>MASUK</Text>
                    </TouchableOpacity>
                </>
            )
        }
    }

    render() {
        const ticket = this.props.navigation.getParam('ticket')
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
                                        <SimpleLineIcons style={[{ color: '#f97432' }]} size={16} name={'plane'} /> {ticket.fromAirport.city} <MaterialCommunityIcons size={15} name={'arrow-right'} /> {ticket.toAirport.city}
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
                                    <Text style={{ color: '#4d4f44' }}>{ticket.plane.name}</Text>
                                </Col>
                            </Grid>
                            <Grid style={{ marginVertical: 5 }}>
                                <Col>
                                    <Text style={{ color: '#4d4f44', fontSize: 12 }}>{Moment.tz(ticket.departure_time, 'Asia/Jakarta').format('MMMM Do YYYY, h:mm:ss a')} ({ticket.fromAirport.code_name}) <MaterialCommunityIcons size={15} name={'arrow-right'} /> {Moment.tz(ticket.arrived_time, 'Asia/Jakarta').format('LT')} ({ticket.toAirport.code_name}) </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col>
                                    <Text style={{ color: '#898989' }}>(Langsung)</Text>
                                </Col>
                            </Grid>
                            <Dash style={{ width: '100%', height: 1, marginVertical: 20 }} dashColor='#d9d9d9' />
                        </View>
                        <Text style={{ color: '#7f7f7f', fontSize: 15, paddingTop: 10, paddingBottom: 5, paddingHorizontal: 15 }}>Data Pemesan</Text>
                        
                        {this.__renderProfile()}
                        
                        {this.__renderListPassanger()}

                        <View style={{ backgroundColor: '#f5fafd', padding: 20 }}>
                            <Grid>
                                <Col style={{ width: '15%' }}>
                                    <MaterialCommunityIcons style={{ color: '#f97432' }} size={25} name={'security'} />
                                </Col>
                                <Col style={{ width: '65%' }}>
                                    <Text style={{ color: '#4d4f44', fontSize: 14 }}>Proteksikan Perjalanan Anda</Text>
                                </Col>
                                <Col style={{ width: '20%' }}>
                                    <Switch
                                        onValueChange={(val) => this.setState({ isRoundTrip: val })}
                                        value={this.state.isRoundTrip} />
                                </Col>
                            </Grid>
                        </View>
                        <View style={{ backgroundColor: '#ffff', padding: 20 }}>
                            <Text style={{ color: '#4d4f44', fontSize: 14 }}>Klaim instan: mudah, cepat dan otomatis</Text>
                            <Text style={{ color: '#4d4f44', fontSize: 11 }}>Asuransi Simas Insurtech - PasarPolis</Text>
                            <Card style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <MaterialCommunityIcons style={{ color: '#f97432' }} size={20} name={'av-timer'} />
                                        <SimpleLineIcons style={[{ color: '#f97432' }]} size={25} name={'plane'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ color: '#898989', fontSize: 13 }}>Keterlambatan Penerbangan: Mulai dari 60 menit ke atas. kompensasi Rp250ribu per jam hingga Rp2,5juta.</Text>
                                    </Col>
                                </Grid>
                            </Card>
                            <Card style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <Feather style={[{ color: '#f97432' }]} size={35} name={'calendar'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ color: '#898989', fontSize: 13 }}>Pembatalan Perjalanan: Ganti rugi hingga Rp 10 juta.</Text>
                                    </Col>
                                </Grid>
                            </Card>
                            <Card style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <AntDesign style={{ color: '#f97432' }} size={35} name={'warning'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ color: '#898989', fontSize: 13 }}>Kecelakaan Diri: Biaya pertanggungan hingga Rp100 juta.</Text>
                                    </Col>
                                </Grid>
                            </Card>
                            <Card style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <MaterialCommunityIcons style={{ color: '#f97432', alignSelf: 'flex-start' }} size={35} name={'bag-personal'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ color: '#898989', fontSize: 13 }}>Keterlambatan & Kehilangan Bagasi: Ganti rugi hingga Rp2,5 juta.</Text>
                                    </Col>
                                </Grid>
                            </Card>
                            <Card style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                <Grid>
                                    <Col style={{ width: '20%' }}>
                                        <MaterialCommunityIcons style={{ color: '#f97432' }} size={35} name={'cellphone-android'} />
                                    </Col>
                                    <Col style={{ width: '80%' }}>
                                        <Text style={{ color: '#898989', fontSize: 13 }}>Fitur Klaim Instan: Proses mudah, cepat, dan otomatis!</Text>
                                    </Col>
                                </Grid>
                            </Card>
                        </View>
                        <View style={{ backgroundColor: '#f5fafd', padding: 20, borderBottomColor: '#efefef' }}>
                            <Grid>
                                <Col style={{ width: '50%' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#f97432', fontSize: 14 }}>Rp 19.000</Text>
                                        <Text style={{ color: '#898989', fontSize: 14 }}> per orang</Text>
                                    </View>
                                </Col>
                                <Col style={{ width: '50%' }}>
                                    <TouchableOpacity onPress={() => alert('Selengkapnya!')}>
                                        <Text style={{ fontSize: 14, color: '#4597cd', alignSelf: 'flex-end' }}>Selengkapnya</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                        </View>
                        <View style={{ backgroundColor: '#f5fafd', padding: 20 }}>
                            
                            {this.__renderButtonNext()}

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

const mapStateToState = state => {
    return {
        booking: state.Booking,
        auth: state.Auth
    }
}

export default connect(mapStateToState)(BookingTicketAirPlane)