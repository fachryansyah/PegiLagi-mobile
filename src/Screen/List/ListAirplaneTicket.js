import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
    Title,
    Content,
    Right,
    Body,
    Text,
    Col,
    Grid,
    Button,
    Left,
    Icon,
    Card
} from 'native-base';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
export default class ListAirplaneTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inbox: [
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
                },
                {
                    titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
                    titleBody: 'Sebentar lagi koq. Siap-siap ya!',
                    titleFooter: '7 jam yang lalu'
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
                            <Button transparent onPress={() => this.props.navigation.navigate('OrderAirplaneTicket')}>
                                <Left>
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 15 }}>
                                Jakarta (JKT) Surabaya (SUB)
                            </Text>
                            <Text style={{ color: '#ffff', fontSize: 12 }}>
                                25 Okt 2019 . 1 Penumpang
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, backgroundColor: '#e08b6c', position: 'absolute' }}
                                transparent onPress={() => alert('oke')}>
                                <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={25} name={'calendar-range-outline'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.inbox}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => alert('Woi!!!')}>
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
                                                    Garuda Indonesia
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    14:00
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '22%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    1j 40m
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13 }}>
                                                    15:40
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '30%' }}>
                                                <Text style={{ fontSize: 13, color: '#ffa500' }}>
                                                    Rp 1.418.700
                                                </Text>
                                            </Col>
                                        </Grid>
                                        <Grid>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                    CGK
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '22%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                    Langsung
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '20%' }}>
                                                <Text style={{ fontSize: 13, color: '#898989' }}>
                                                    BTJ
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
                                                    <SimpleLineIcons style={[{ color: '#898989' }]} size={12} name={'handbag'} /> 20 kg
                                                </Text>
                                            </Col>
                                            <Col style={{ width: '30%' }}>
                                                <Text style={{ fontSize: 11, color: '#898989' }}>
                                                    <MaterialCommunityIcons style={[{ color: '#898989' }]} size={12} name={'silverware-fork-knife'} /> Makananan
                                                </Text>
                                            </Col>
                                            <Col style={{ alignItems: 'flex-end' }}>
                                                <TouchableOpacity onPress={() => alert('Woi!!!')}>
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
    }
})