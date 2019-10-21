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
export default class InboxScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Inbox</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>This is inbox</Text>
                </Content>
            </Container>
        );
    }
}
