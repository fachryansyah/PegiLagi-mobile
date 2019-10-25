import React, { Component } from 'react'
import Dash from 'react-native-dash'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Body, Content, Form, Title, Item, Input, Label, Button, Icon, Left, Right } from 'native-base';

export default class LoginScreen extends Component {
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
                        <Item floatingLabel>
                            <Label style={styles.labelForm}>Email</Label>
                            <Input placeholder="Username" />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.labelForm}>Password</Label>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button style={styles.buttonLogin}><Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text></Button>
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