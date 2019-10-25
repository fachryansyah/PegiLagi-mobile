import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'
import {
    Container,
    Header,
    Content,
    Text,
    Body,
    Right,
    Button,
    Title,
    Left,
    Icon,
    Input,
    Form
} from 'native-base';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
           email:'' 
        }
    }

    reset(){
        alert('Periksa email Anda di '+this.state.email+' dan ikuti instruksi untuk membuat kata sandi baru')
    }
    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>

                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='arrow-back' style={{ color: '#ffff' }} />
                        </Button>
                    </Left>

                    <Body>
                        <Title>Lupa Password</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.container}>
                    <View style={{marginBottom:28}}>
                        <Text style={{fontSize:14, color:444}}>Masukkan email Anda di Bawah untuk mendapatkan email instruksi dan tautan reset password.</Text>
                    </View>
                    <View>
                    <Input placeholder="Email" placeholderTextColor='#ccc' style={{ paddingTop:16, fontSize:17, borderBottomColor: '#dedede', borderBottomWidth: 1 }} onChangeText={(value)=>this.setState({email:value})} />                        
                    <Button style={styles.buttonReset} onPress={() => this.reset()}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>KIRIM</Text>
                </Button>
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
        padding:15
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
    buttonReset: {
        justifyContent: 'center',
        backgroundColor: '#f97432',
        marginVertical: 30
    },
})