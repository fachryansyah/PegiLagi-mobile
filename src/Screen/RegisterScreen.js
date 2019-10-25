import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
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
    Left,
    Button,
    Icon,
    Form,
    Input,
    Item,
    Label,
    Spinner,
    CheckBox
} from 'native-base';
import Dash from 'react-native-dash'
import Http from '../Helpers/Http'


export default class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            fullname: '',
            password: '',
            confirmPassword: '',
            errors: [],
            isCheckAgreement: false,
            isLoading: false,
            isLogin: false,
            isEmailValid: true,
            isPasswordValid: true
        }
    }

    async register(){

        const { email, fullname, password } = this.state

        if (!this.state.isCheckAgreement) {
            return alert("Mohon menyetujui persyaratan")
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (reg.test(this.state.email) === false) {
            alert("Email doesn't valid")
            return this.setState({
                isEmailValid: false
            })
        }

        this.setState({
            isEmailValid: true
        })

        if (this.state.password !== this.state.confirmPassword) {
            alert("Password tidak sama")
            return this.setState({
                isPasswordValid: false
            })
        }

        this.setState({
            isLoading: true
        })

        await Http.post('/auth/register',{
            email,
            fullname,
            password
        })
        .then((res) => {

            if (res.data.status == 304) {
                alert(res.data.errors[0].msg)
            }

            if (res.data.status == 200) {
                alert('Registrasi sukses!')
                this.props.navigation.navigate('Login')
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

    __renderBtnRegister(){
        if(this.state.isLoading){
            return(
                <>
                    <Spinner color='#f97432' />
                </>
            )
        }else{
            return(
                <Button style={styles.buttonLogin} onPress={() => this.register()}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>
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
                        <Title>Daftar</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={{ marginBottom: 20 }}>
                    <Content style={styles.contentRegister}>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                color: '#4d4f44',
                                marginBottom: 10
                            }}>
                                Isi data diri Anda secara lengkap dan nikmati berbagai promo khusu member!
                        </Text>
                            <Text style={{
                                textAlign: 'center',
                                color: '#898989'
                            }}>
                                Dapatkan juga PepePoin yang bisa Anda gunakan sebagai diskon untuk transaksi berikutnya.
                        </Text>
                        </View>

                        <Grid>
                            <Col>
                                <Form>
                                    <Item floatingLabel error={!this.state.isEmailValid}>
                                        <Label style={styles.labelForm}>Email</Label>
                                        <Input onChangeText={(val) => this.setState({email:val})} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={styles.labelForm}>Nama lengkap (tanpa gelar)</Label>
                                        <Input onChangeText={(val) => this.setState({fullname: val})} />
                                    </Item>
                                    <Item floatingLabel error={!this.state.isPasswordValid}>
                                        <Label style={styles.labelForm}>Password</Label>
                                        <Input secureTextEntry={true} onChangeText={(val) => this.setState({password:val})} />
                                    </Item>
                                    <Item floatingLabel error={!this.state.isPasswordValid}>
                                        <Label style={styles.labelForm}>Konfirmasi Password</Label>
                                        <Input secureTextEntry={true} onChangeText={(val) => this.setState({confirmPassword: val})} />
                                    </Item>
                                </Form>
                            </Col>
                        </Grid>
                        <Grid style={{ marginTop: 35, marginBottom: 10 }}>
                            <Col style={{ width: '20%' }}>
                                <CheckBox checked={this.state.isCheckAgreement} color="#f97432" onPress={() => this.setState({ isCheckAgreement: !this.state.isCheckAgreement })} />
                            </Col>
                            <Col style={{ width: '80%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 11 }}>Saya setuju dengan</Text>
                                    <Text style={{ fontSize: 11, color: '#f97432' }}> kebijakan Privasi</Text>
                                    <Text style={{ fontSize: 11 }}> dan</Text>
                                    <Text style={{ fontSize: 11, color: '#f97432' }}> ketentuan </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 11, color: '#f97432' }}>Penggunaan Pegilagi</Text>
                                    <Text style={{ fontSize: 11 }}> Pegilagi</Text>
                                </View>
                            </Col>
                        </Grid>
                        {this.__renderBtnRegister()}
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14 }}>Sudah memiliki akun?</Text>
                            <Text style={{ color: '#f97432', fontSize: 14 }} onPress={() => this.props.navigation.navigate("Login")}> Masuk</Text>
                            <Text style={{ fontSize: 14 }}> di sini</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                            <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                            <Text style={{ marginLeft: 7, marginRight: 7, textAlign: 'center', fontSize: 14 }}>ATAU</Text>
                            <Dash style={{ width: '42%', height: 1, marginVertical: 12 }} dashColor='#d9d9d9' />
                        </View>
                        <Button style={styles.buttonFB}>
                            <Icon type="FontAwesome" name="facebook-square" />
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Login dengan Facebook
                        </Text>
                        </Button>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    header: {
        backgroundColor: '#f97432'
    },
    contentRegister: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    },
    labelForm: {
        fontSize: 15,
        color: '#898989'
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