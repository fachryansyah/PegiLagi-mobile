import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Switch,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Footer,
    Icon
} from 'native-base'
import Dash from 'react-native-dash'

export default class OrderTrainTicket extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRoundTrip: false
        }
    }

    render() {
        return (
            <>
                <Container style={styles.body}>
                    <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Pesan Tiket Kereta</Title>
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
                                        <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('SearchStation')}>
                                            <Text style={styles.textTitle}>Asal</Text>
                                            <Text style={styles.textCodeName}>GBR</Text>
                                            <Text style={styles.textValue}>Gambir</Text>
                                        </TouchableOpacity>
                                    </Left>
                                    <Icon style={{ color: '#FFA40C', alignSelf: 'center' }} size={20} type='FontAwesome5' name='exchange-alt' />
                                    <Right style={{ alignItems: 'center' }}>
                                        <Text style={styles.textTitle}>Asal</Text>
                                        <Text style={styles.textCodeName}>GBR</Text>
                                        <Text style={styles.textValue}>Gambir</Text>
                                    </Right>
                                </View>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Text style={styles.textTitle}>Berangkat</Text>
                                <Text style={styles.textValue}>Sel, 22 Okt 19</Text>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Text style={styles.textTitle}>Penumpang</Text>
                                <Text style={styles.textValue}>1 Dewasa, 0 Bayi</Text>
                            </View>

                            <Dash style={{ width: '99%', height: 1 }} dashColor='#d9d9d9' />

                            <View style={{ padding: 12, alignItems: 'center' }}>
                                <Button full style={{ alignItems: 'center', backgroundColor: '#FF681B', borderRadius: 6 }}>
                                    <Text>CARI TIKET</Text>
                                </Button>
                            </View>
                        </Card>

                        <Image source={require('../../Assets/Images/bg-order-train-ticket.png')} style={styles.trainImage} />

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
        backgroundColor: '#FFA500'
    },
    body: {
        flex: 1,
        backgroundColor: '#FFA500'
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
    }
})