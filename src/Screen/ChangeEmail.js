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
    Form,
    Card
} from 'native-base';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
export default class ChangeEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureTextEntryOldPassword: true,
            iconNameOldPassword: "eye-off",
        }
    }

    onIconPressOldPassword = () => {
        let iconNameOldPassword = (this.state.secureTextEntryOldPassword) ? "eye" : "eye-off"

        this.setState({
            secureTextEntryOldPassword: !this.state.secureTextEntryOldPassword,
            iconNameOldPassword: iconNameOldPassword
        })
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '10%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Left>
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 20, marginTop: 7, alignSelf: 'center' }}>
                                Ubah Email
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
                                    Perubahan email Anda akan membutuhkan verifikasi ulang
                                </Text>
                            </Col>
                        </Grid>
                        <Grid style={{ paddingHorizontal: 10, borderBottomColor: '#eee', borderBottomWidth: 3 }}>
                            <Col>
                                <Form>
                                    <Item floatingLabel style={{ marginTop: 20 }}>
                                        <Label style={styles.labelForm}>Email</Label>
                                        <Input style={{ color: '#4d4f44' }} />
                                    </Item>
                                    <Item floatingLabel style={{ marginTop: 20 }}>
                                        <Label style={styles.labelForm}>Password Anda</Label>
                                        <Input style={{ color: '#4d4f44' }} {...this.props} secureTextEntry={this.state.secureTextEntryOldPassword} />
                                        <Icon style={{ color: '#d9d9d9' }} name={this.state.iconNameOldPassword} onPress={() => this.onIconPressOldPassword()} />
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
        marginTop: 50,
        marginBottom: 30
    },
})