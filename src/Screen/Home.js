import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
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
    Icon
} from 'native-base';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
                                Ubah Profil
                            </Text>
                        </Col>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text style={{ color: '#898989', paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>Profil</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePersonalData')}>
                            <Grid>
                                <Col style={styles.colCard}>
                                    <Grid>
                                        <Col style={styles.colIcon}>
                                            <View>
                                                <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'pencil-square-o'} />
                                            </View>
                                        </Col>
                                        <Col style={styles.colText}>
                                            <Text style={{ color: '#4d4f44', fontSize: 18 }}>
                                                Ubah Data Pribadi
                                    </Text>
                                        </Col>
                                        <Col style={styles.colIconRight}>
                                            <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                        <Text style={{ color: '#898989', paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>Password</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Grid>
                                <Col style={styles.colCard}>
                                    <Grid>
                                        <Col style={styles.colIcon}>
                                            <View>
                                                <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'pencil'} />
                                            </View>
                                        </Col>
                                        <Col style={styles.colText}>
                                            <Text style={{ color: '#4d4f44', fontSize: 18 }}>
                                                Ubah Password
                                            </Text>
                                        </Col>
                                        <Col style={styles.colIconRight}>
                                            <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                        <Text style={{ color: '#898989', paddingHorizontal: 20, paddingVertical: 10, fontSize: 18 }}>Email</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeEmail')}>
                            <Grid>
                                <Col style={styles.colCard}>
                                    <Grid>
                                        <Col style={styles.colIcon}>
                                            <View>
                                                <MaterialCommunityIcons style={[{ color: '#d9d9d9' }]} size={25} name={'email'} />
                                            </View>
                                        </Col>
                                        <Col style={styles.colText}>
                                            <Text style={{ color: '#4d4f44', fontSize: 18 }}>
                                                Ubah Email
                                    </Text>
                                        </Col>
                                        <Col style={styles.colIconRight}>
                                            <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                        <Grid>
                            <Col style={styles.colCard}>
                                <View style={{ marginHorizontal: 15, }}>
                                    <Text style={{ color: '#4d4f44' }}>Masuk lebih mudah dengan menghubungkan media sosial Anda ke PegiLagi</Text>
                                    <Dash style={{ width: '100%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                                </View>
                                <Button style={styles.buttonFB} onPress={() => alert('Login dengan facebook!')}>
                                    <Icon type="FontAwesome" name="facebook-square" />
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                        Hubungkan Dengan Facebook
                                    </Text>
                                </Button>
                            </Col>
                        </Grid>
                    </View>
                </Content>
            </Container>
        )
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
    colCard: {
        backgroundColor: '#ffff',
        paddingVertical: 20,
        marginBottom: 15,
    },
    colIcon: {
        backgroundColor: '#ffff',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colText: {
        justifyContent: 'center',
        width: '75%',
        paddingRight: 20
    },
    colIconRight: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    },
    buttonFB: {
        justifyContent: 'center',
        backgroundColor: '#4267b2',
        margin: 10,
    }
})