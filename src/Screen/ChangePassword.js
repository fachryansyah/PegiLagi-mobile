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
    Icon,
    Item,
    Label,
    Input,
    Form
} from 'native-base';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
export default class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureTextEntryOldPassword: true,
            secureTextEntryNewPassword: true,
            secureTextEntryConfirmPassword: true,
            iconNameOldPassword: "eye-off",
            iconNameNewPassword: "eye-off",
            iconNameConfirmPassword: "eye-off"
        }
    }

    onIconPressOldPassword = () => {
        let iconNameOldPassword = (this.state.secureTextEntryOldPassword) ? "eye" : "eye-off"

        this.setState({
            secureTextEntryOldPassword: !this.state.secureTextEntryOldPassword,
            iconNameOldPassword: iconNameOldPassword
        })
    }

    onIconPressNewPassword = () => {
        let iconNameNewPassword = (this.state.secureTextEntryNewPassword) ? "eye" : "eye-off"

        this.setState({
            secureTextEntryNewPassword: !this.state.secureTextEntryNewPassword,
            iconNameNewPassword: iconNameNewPassword
        })
    }

    onIconPressConfirmPassword = () => {
        let iconNameConfirmPassword = (this.state.secureTextEntryConfirmPassword) ? "eye" : "eye-off"

        this.setState({
            secureTextEntryConfirmPassword: !this.state.secureTextEntryConfirmPassword,
            iconNameConfirmPassword: iconNameConfirmPassword
        })
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '13%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Left>
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 20, marginTop: 7, alignSelf: 'center' }}>
                                Ubah Password
                            </Text>
                        </Col>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Grid style={{ backgroundColor: '#777777', paddingVertical: 15 }}>
                            <Col style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <AntDesignIcons style={{ color: '#f6f6f6' }} size={25} name={'warning'} />
                            </Col>
                            <Col style={{ width: '80%' }}>
                                <Text style={{ color: '#f6f6f6' }}>
                                    Harap menggunakan password yang belum pernah dipakai di situs atau aplikasi lain
                                </Text>
                            </Col>
                        </Grid>
                        <Grid style={{ paddingHorizontal: 10, borderBottomColor: '#eee', borderBottomWidth: 3 }}>
                            <Col>
                                <Form>
                                    <Item floatingLabel style={{ marginTop: 20 }}>
                                        <Label style={styles.labelForm}>Password Anda</Label>
                                        <Input style={{ color: '#4d4f44' }} {...this.props} secureTextEntry={this.state.secureTextEntryOldPassword} />
                                        <Icon style={{ color: '#d9d9d9' }} name={this.state.iconNameOldPassword} onPress={() => this.onIconPressOldPassword()} />
                                    </Item>
                                    <Item floatingLabel style={{ marginTop: 20 }}>
                                        <Label style={styles.labelForm}>Password baru</Label>
                                        <Input style={{ color: '#4d4f44' }} {...this.props} secureTextEntry={this.state.secureTextEntryNewPassword} />
                                        <Icon style={{ color: '#d9d9d9' }} name={this.state.iconNameNewPassword} onPress={() => this.onIconPressNewPassword()} />
                                    </Item>
                                    <Text style={{ color: '#4d4f44', marginHorizontal: 15, marginVertical: 10, fontSize: 14 }}>
                                        6-20 karakter mengandung huruf dan angka
                                    </Text>
                                    <Item floatingLabel style={{ marginTop: 10 }}>
                                        <Label style={styles.labelForm}>Konfirmasi password</Label>
                                        <Input style={{ color: '#4d4f44' }} {...this.props} secureTextEntry={this.state.secureTextEntryConfirmPassword} />
                                        <Icon style={{ color: '#d9d9d9' }} name={this.state.iconNameConfirmPassword} onPress={() => this.onIconPressConfirmPassword()} />
                                    </Item>
                                    <Button style={styles.buttonLogin} onPress={() => alert('Simpan!')}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Simpan</Text>
                                    </Button>
                                </Form>
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
    },
    colCard: {
        backgroundColor: '#ffff',
        paddingVertical: 20,
        marginBottom: 15,
    },
    labelForm: {
        fontSize: 17,
        color: '#898989'
    },
    buttonLogin: {
        justifyContent: 'center',
        backgroundColor: '#f97432',
        marginVertical: 30
    },
})