import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Header,
    Button,
    Left,
    Right,
    Icon,
    Input,
    Grid,
    Spinner,
    Col
} from 'native-base'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Http from '../../Helpers/Http'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class SearchAirportFrom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSearch: true,
            isLoading: true,
            historyStasiun: [
                {
                    city: 'Jakarta',
                    NameStation: 'JKT - Semua Bandara'
                }
            ],
            airports: []
        }
    }

    componentDidMount() {
        this.getAirportData()
    }

    async getAirportData() {
        await Http.get('/airport')
            .then((res) => {
                if (res.data.status == 200) {
                    this.setState({
                        airports: res.data.data,
                        isLoading: false
                    })
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    async onSelected(item) {
        console.log(item)
        await this.props.navigation.navigate('OrderAirplaneTicket', {
            from_airport_id: item.id,
            from_airport_city: item.city,
            from_airport_code: item.code_name
        })
    }

    __renderListAirport() {
        if (this.state.isLoading) {
            return (
                <>
                    <View style={{ flex: 1, height: SCREEN_HEIGHT * 0.9, justifyContent: 'center' }}>
                        <Spinner color='red' />
                    </View>
                </>
            )
        } else {
            return (
                <>
                    {this.state.isSearch ? this.__renderSearch() : this.__renderNotSearch()}
                    <View style={{
                        backgroundColor: '#fafafa',
                        height: 60,
                        justifyContent: 'center',
                        paddingLeft: 12
                    }}>
                        <Text style={{ color: '#838383' }}>
                            Kota atau Bandara Populer
                        </Text>
                    </View>
                    <FlatList
                        data={this.state.airports}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, key }) => (
                            <TouchableOpacity onPress={() => this.onSelected(item)} key={key}>
                                <Grid style={styles.cardStation}>
                                    <Col>
                                        <Text style={{ color: '#4c4b3f' }}>{item.city}</Text>
                                        <Text style={{ color: '#838383', fontSize: 15 }}>{item.code_name} - {item.city}</Text>
                                    </Col>
                                    <Right>
                                        <Col>
                                            <View style={styles.cardStationIcon}>
                                                <Text style={{ color: '#969696' }}>
                                                    <SimpleLineIcons style={[{ color: '#d9d9d9' }]} size={18} name={'plane'} /> Bandara
                                                </Text>
                                            </View>
                                        </Col>
                                    </Right>
                                </Grid>
                            </TouchableOpacity>
                        )}
                    />
                </>
            )
        }
    }

    __renderSearch() {
        return (
            <Content>
                <Grid style={{
                    backgroundColor: '#fafafa',
                    height: 60,
                    justifyContent: 'center',
                    paddingLeft: 12,
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingRight: 12
                }}>
                    <Col>
                        <Text style={{ color: '#838383' }}>
                            Pencarian terakhir
                        </Text>
                    </Col>
                    <Col style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => alert('Yakin Hapus Aku!')}>
                            <View>
                                <Text style={{ color: '#f97432' }}>
                                    HAPUS SEMUA
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Col>
                </Grid>
                <FlatList
                    data={this.state.historyStasiun}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, key }) => (
                        <TouchableOpacity onPress={() => alert('Mau kemana!')}>
                            <Grid style={styles.cardStation}>
                                <Col>
                                    <Text style={{ color: '#4c4b3f' }}>{item.city}</Text>
                                    <Text style={{ color: '#838383', fontSize: 15 }}>{item.NameStation}</Text>
                                </Col>
                                <Right>
                                    <Col>
                                        <View style={styles.cardStationIcon}>
                                            <Text style={{ color: '#969696' }}>
                                                <SimpleLineIcons style={[{ color: '#d9d9d9' }]} size={18} name={'plane'} /> Bandara
                                            </Text>
                                        </View>
                                    </Col>
                                </Right>
                            </Grid>
                        </TouchableOpacity>
                    )}
                />

            </Content>
        )
    }

    __renderNotSearch() {
        return (
            <Content>
            </Content>
        )
    }


    render() {
        return (
            <>
                <Container style={styles.body}>
                    <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                        <Grid>
                            <Col style={{ width: '15%' }}>
                                <Button transparent onPress={() => this.props.navigation.navigate('OrderAirplaneTicket')}>
                                    <Left>
                                        <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                    </Left>
                                </Button>
                            </Col>
                            <Col style={{ width: '70%' }}>
                                <Input
                                    style={styles.inputSearch}
                                    placeholder="Cari kota atau bandara..."
                                    placeholderTextColor="#f2d8a3" />
                            </Col>
                            <Col style={{ width: '15%' }}>
                                <Button transparent onPress={() => alert('oke')}>
                                    <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'search'} />
                                </Button>
                            </Col>
                        </Grid>
                    </Header>
                    <Content>
                        {this.__renderListAirport()}
                    </Content>
                </Container>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fb9d7b',
        paddingTop: 7,
        paddingBottom: 7
    },
    body: {
        flex: 1,
    },
    inputSearch: {
        backgroundColor: '#e28d6e',
        borderRadius: 5,
        color: '#ffff'
    },
    cardStation: {
        height: 70,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 20,
        paddingBottom: 20
    },
    cardStationIcon: {
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})