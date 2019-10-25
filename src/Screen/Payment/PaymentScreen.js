import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native'
import {
    Container,
    Header,
    Icon,
    Button,
    Left,
    Body,
    Right,
    Title,
    CardItem,
    Card,
    Text
} from 'native-base';

export default class PaymentScreen extends Component {

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432'>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='close' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pembayaran</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView>
                    <View style={{ backgroundColor: '#f97432', flexDirection: 'row', padding: 10 }}>
                        <Text style={{ color: '#fea875', fontSize: 18, paddingRight: 12 }}>
                            ① Data Pesanan
                        </Text>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            ① Bayar
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Transfer Bank
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Bank
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 5, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 15, }}
                                                source={require('../../Assets/Images/logo-bank/bca.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 0, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 40, height: 23, }}
                                                source={require('../../Assets/Images/logo-bank/mandiri.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 5, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 10, }}
                                                source={require('../../Assets/Images/logo-bank/bni.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 4, paddingTop: 7, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 10, }}
                                                source={require('../../Assets/Images/logo-bank/bri.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Kartu Kredit
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Kartu Kredit
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 5, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 12, }}
                                                source={require('../../Assets/Images/logo-bank/visa.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 0, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 40, height: 23, }}
                                                source={require('../../Assets/Images/logo-bank/mastercard.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Transfer ATM
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        ATM
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 1, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/atm-bersama.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 1, paddingHorizontal: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 32, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/ALTO.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 1, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/prima.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 1, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/permata.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Virtual Account
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Virtual Account BCA
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 5, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 30, height: 15, }}
                                                source={require('../../Assets/Images/logo-bank/bca.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Internet Banking
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        KlikBCA
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/klikbca.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Bayar di Minimarket
                            </Text>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#9aa1ae', borderBottomWidth: 1, paddingVertical: 8 }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Indomaret
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/Indomaret.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#9aa1ae', borderBottomWidth: 1, paddingVertical: 8 }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Alfamart
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 2, paddingVertical: 4, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 15, }}
                                                source={require('../../Assets/Images/logo-bank/alfamart.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 2, paddingHorizontal: 8, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 22, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/alfaexpress.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/Alfamidi.png')}
                                            />
                                        </View>
                                        <View style={{ margin: 4, padding: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/lawson.png')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>

                        <Card style={{ padding: 10 }}>
                            <Text style={styles.titleCard}>
                                Cicilan Tanpa Kartu
                            </Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                                <Left>
                                    <Text style={{ color: '#9aa1ae' }}>
                                        Kredivo
                                </Text>
                                </Left>
                                <Right>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 4, padding: 2, backgroundColor: '#ffff', borderColor: '#9aa1ae', borderWidth: 1, borderRadius: 5 }}>
                                            <Image
                                                style={{ width: 35, height: 20, }}
                                                source={require('../../Assets/Images/logo-bank/kredivo.jpg')}
                                            />
                                        </View>
                                    </View>
                                </Right>
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f97432'
    },
    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
    }
})
