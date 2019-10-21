import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
} from 'native-base';
export default class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>This is profile</Text>
                </Content>
            </Container>
        );
    }
}
