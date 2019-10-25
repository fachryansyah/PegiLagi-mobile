import React, { Component } from 'react';
import {
    StyleSheet,
    View,
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
    Grid
} from 'native-base';
import Dash from 'react-native-dash'
import { connect } from 'react-redux'
import { logout } from '../Redux/Actions/Auth'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Http from '../Helpers/Http'
import AsyncStorage from '@react-native-community/async-storage';


class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }

    async logout(){
        await this.props.dispatch(logout())
        await AsyncStorage.removeItem('@token')
        Http.defaults.headers.common['Authorization'] = 'Bearer '
        alert('Logged out!')
    }

    __renderNotLogin() {
        return (
            <Content>
                <View style={styles.container}>
                    <Grid>
                        <Col style={styles.colHeader}>
                            <Text style={styles.textColHeader}>Daftar dan nikmati berbagai promo khusus member, sekarang!</Text>
                            <Grid>
                                <Col>
                                    <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate("Register")}>
                                        <Text style={{ color: '#ffff', textAlign: 'center' }}>REGISTER</Text>
                                    </TouchableOpacity>
                                    <Grid>
                                        <Col>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                                                <Text style={{ marginLeft: 7, marginRight: 7, textAlign: 'center' }}>ATAU</Text>
                                                <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                                            </View>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate("Login")}>
                                                <Text style={{ color: '#f97432', textAlign: 'center' }}>LOGIN</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>
                    <TouchableOpacity onPress={() => alert('Daftar Tamu!')}>
                        <Grid>
                            <Col style={styles.colCard}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'user-o'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#898989', fontSize: 17 }}>
                                            Daftar Tamu dan Penumpang
                                    </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Isi data teman perjalanan Anda
                                    </Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                    </Col>
                                </Grid>
                            </Col>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Pusat Bantuan!')}>
                        <Grid>
                            <Col style={styles.colCardItems}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <AntDesignIcons style={[{ color: '#d9d9d9' }]} size={25} name={'customerservice'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#4d4f44', fontSize: 17 }}>
                                            Pusat Bantuan
                                        </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Kami siap membantu Anda
                                        </Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                    </Col>
                                </Grid>
                            </Col>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Newsletter!')}>
                        <Grid>
                            <Col style={styles.colCardItems}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <MaterialIcons style={[{ color: '#d9d9d9' }]} size={25} name={'email-open-outline'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#4d4f44', fontSize: 17 }}>
                                            Newsletter
                                    </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Berlangganan newsletter
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
                        <Col style={styles.colFooter}>
                            <Text style={{ color: '#4d4f44', fontSize: 17 }}>Version 2.8.2</Text>
                        </Col>
                    </Grid>
                </View>
            </Content >
        )
    }

    __renderLogin() {
        return (
            <Content>
                <View style={styles.container}>
                    <Grid>
                        <Col style={styles.colHeader2}>
                            <Grid>
                                <Col style={styles.colImage}>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 50 }}
                                        source={{ uri: this.props.auth.user.avatar }}
                                    />
                                </Col>
                                <Col style={styles.colText2}>
                                    <Text style={{ color: '#4d4f44', fontSize: 17, marginBottom: 10 }}>
                                        {this.props.auth.user.fullname}
                                    </Text>
                                    <Text style={{ color: '#898989', fontSize: 13 }}>
                                        {this.props.auth.user.email}
                                    </Text>
                                </Col>
                                <Col style={styles.colIconRight2}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeProfil')}>
                                        <Text style={{ color: '#f97432', fontSize: 14 }}>UBAH</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={styles.colHeader3}>
                            <Dash style={{ width: '100%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                            <Grid>
                                <FontAwesomeIcons style={[{ color: '#d9d9d9', marginLeft: 10, marginRight: 20 }]} size={25} name={'star-o'} />
                                <Col>
                                    <Text style={{ color: '#4d4f44' }}>0 poin</Text>
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>

                    <TouchableOpacity onPress={() => alert('Daftar Tamu!')}>
                        <Grid>
                            <Col style={styles.colCard}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'user-o'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#898989', fontSize: 17 }}>
                                            Daftar Tamu dan Penumpang
                                    </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Isi data teman perjalanan Anda
                                    </Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                    </Col>
                                </Grid>
                            </Col>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Pusat Bantuan!')}>
                        <Grid>
                            <Col style={styles.colCardItems}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <AntDesignIcons style={[{ color: '#d9d9d9' }]} size={25} name={'customerservice'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#4d4f44', fontSize: 17 }}>
                                            Pusat Bantuan
                                    </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Kami siap membantu Anda
                                    </Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                    </Col>
                                </Grid>
                            </Col>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Newsletter!')}>
                        <Grid>
                            <Col style={styles.colCardItems}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <MaterialIcons style={[{ color: '#d9d9d9' }]} size={25} name={'email-open-outline'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#4d4f44', fontSize: 17 }}>
                                            Newsletter
                                    </Text>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>
                                            Berlangganan newsletter
                                    </Text>
                                    </Col>
                                    <Col style={styles.colIconRight}>
                                        <FontAwesomeIcons style={[{ color: '#f97432' }]} size={15} name={'chevron-right'} />
                                    </Col>
                                </Grid>
                            </Col>
                        </Grid>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.logout()}>
                        <Grid>
                            <Col style={styles.colCardItemsKeluar}>
                                <Grid>
                                    <Col style={styles.colIcon}>
                                        <View>
                                            <MaterialIcons style={[{ color: '#d9d9d9', marginTop: 6 }]} size={25} name={'exit-to-app'} />
                                        </View>
                                    </Col>
                                    <Col style={styles.colText}>
                                        <Text style={{ color: '#4d4f44', fontSize: 17 }}>
                                            Keluar
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
                        <Col style={styles.colFooter}>
                            <Text style={{ color: '#4d4f44', fontSize: 17 }}>Version 2.8.2</Text>
                        </Col>
                    </Grid>
                </View>
            </Content>
        )
    }

    render() {
        return (
            <Container>
                <Header androidStatusBarColor='#f97432' style={{ backgroundColor: '#f97432' }}>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                {this.props.auth.isAuthenticate ? this.__renderLogin() : this.__renderNotLogin()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    colHeader: {
        backgroundColor: '#ffff',
        height: 220,
        padding: 10,
        alignItems: 'center',
        marginBottom: 30
    },
    textColHeader: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4d4f44'
    },
    btnRegister: {
        backgroundColor: '#f97432',
        height: 45,
        justifyContent: 'center',
        marginBottom: 10
    },
    btnLogin: {
        backgroundColor: '#ffff',
        height: 45,
        justifyContent: 'center',
        marginBottom: 10
    },
    colCard: {
        backgroundColor: '#ffff',
        height: 75,
        marginBottom: 30
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
        paddingTop: 7,
        paddingRight: 20
    },
    colIconRight: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    },
    colCardItems: {
        backgroundColor: '#ffff',
        height: 75,
    },
    colFooter: {
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colHeader2: {
        backgroundColor: '#ffff',
        height: 80,
        padding: 10,
        alignItems: 'center',
    },
    colCardItemsKeluar: {
        backgroundColor: '#ffff',
        height: 75,
        marginTop: 30
    },
    colImage: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colText2: {
        width: '60%',
        paddingTop: 5,
        paddingRight: 20
    },
    colIconRight2: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colHeader3: {
        backgroundColor: '#ffff',
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        alignItems: 'center',
        marginBottom: 30
    },
})

const mapStateToProps = state => {
    return {
        auth: state.Auth
    }
}

export default connect(mapStateToProps)(ProfileScreen)