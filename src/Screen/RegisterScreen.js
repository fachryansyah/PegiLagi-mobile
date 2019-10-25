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
    CheckBox
} from 'native-base';
import Dash from 'react-native-dash'
export default class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
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
                                    <Item floatingLabel>
                                        <Label style={styles.labelForm}>Email</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={styles.labelForm}>Nama lengkap (tanpa gelar)</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={styles.labelForm}>Password</Label>
                                        <Input secureTextEntry={true} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={styles.labelForm}>Konfirmasi Password</Label>
                                        <Input secureTextEntry={true} />
                                    </Item>
                                </Form>
                            </Col>
                        </Grid>
                        <Grid style={{ marginTop: 35, marginBottom: 10 }}>
                            <Col style={{ width: '20%' }}>
                                <CheckBox checked={true} color="#f97432" />
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
                        <Button style={styles.buttonLogin}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>
                        </Button>
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