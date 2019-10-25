import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {
    Content,
    Container,
    Left,
    Right,
    Header,
    Body,
    Button,
    Icon,
    Title,
    Spinner
} from 'native-base'
import { WebView } from 'react-native-webview'

export default class WebViewScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true
        }
    }

    __renderLoader(){
        if (this.state.isLoading) {
            return(
                <>
                    <Spinner color='#f97432' />
                </>
            )
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Header androidStatusBarColor='#f97432' style={{ backgroundColor: '#f97432' }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{this.props.navigation.getParam('title')}</Title>
                        </Body>
                        <Right />
                    </Header>
                    {this.__renderLoader()}
                    <WebView onLoad={() => this.setState({isLoading: false})} source={{ uri: this.props.navigation.getParam('url') }} />
                </Container>
            </>
        )
    }
}