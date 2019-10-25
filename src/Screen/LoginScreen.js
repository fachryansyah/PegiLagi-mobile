import React, { Component } from 'react'
import Dash from 'react-native-dash'
import { connect } from 'react-redux'
import { authenticate } from '../Redux/Actions/Auth'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text } from 'react-native'
import {
    Container,
    Header,
    Body,
    Content,
    Form,
    Title,
    Item,
    Input,
    Label,
    Button,
    Icon,
    Left,
    Right,
    Spinner
} from 'native-base'

import Http from '../Helpers/Http'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: [],
            isEmailValid: true,
            isLoading: false
        }
    }

    async login() {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (reg.test(this.state.email) === false) {
            alert("Email doesn't valid")
            return this.setState({
                isEmailValid: false
            })
        }

        this.setState({
            isLoading: true,
            isEmailValid: true
        })

        await Http.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then( async (res) => {

            if (res.data.status == 500) {
                alert(res.data.message)
            }

            if (res.data.status == 304) {
                this.setState({
                    errors: res.data.errors
                })
            }

            if (res.data.status == 200) {
                this.saveToken(res.data.data.apiKey)
                Http.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.apiKey}`
                await this.props.dispatch(authenticate(res.data.data))
                this.props.navigation.goBack(null)
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

    async saveToken(token){
        try {
            await AsyncStorage.setItem('@token', token)
        } catch (e) {
            console.log(e.message)
        }
    }

    __renderBtnLogin() {
        if (this.state.isLoading) {
            return (
                <>
                    <Spinner color='#f97432' />
                </>
            )
        } else {
            return (
                <Button style={styles.buttonLogin} onPress={() => this.login()}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
                </Button>
            )
        }
    }

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
                        <Title>Masuk</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel error={!this.state.isEmailValid}>
                            <Label style={styles.labelForm}>Email</Label>
                            <Input placeholder="Username" onChangeText={(val) => this.setState({ email: val })} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.labelForm}>Password</Label>
                            <Input placeholder="Password" onChangeText={(val) => this.setState({ password: val })} />
                        </Item>
                    </Form>

                    {this.__renderBtnLogin()}

                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 25 }}>
                        <Text style={{ color: '#f97432', fontWeight: 'bold', borderRightColor: "#aaa", borderRightWidth: 1, marginRight: 5, paddingRight: 5 }} onPress={() => alert("hai")}>Lupa Password? </Text>

                        <Text style={{ color: '#f97432', fontWeight: 'bold', }} onPress={() => alert("hai")}> Belum memiliki akun?</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                        <Text style={{ marginLeft: 7, marginRight: 7, textAlign: 'center' }}>ATAU</Text>
                        <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                    </View>
                    <Button style={styles.buttonFB}>
                        <Icon type="FontAwesome" name="facebook-square" />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Login dengan Facebook
                        </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f97432'
    },
    labelForm: {
        fontSize: 12,
        color: 'grey'
    },
    buttonLogin: {
        justifyContent: 'center',
        backgroundColor: '#f97432',
        margin: 10,
        marginVertical: 20
    },
    buttonFB: {
        justifyContent: 'center',
        backgroundColor: '#4267b2',
        margin: 10,
        marginVertical: 20
    }
})

const mapStateToProps = state => {
    return {
        auth: state.Auth
    }
}

export default connect(mapStateToProps)(LoginScreen)