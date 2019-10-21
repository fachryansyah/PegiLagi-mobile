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
export default class OrderScreen extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Pesanan</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Text>This is Order</Text>
				</Content>
			</Container>
		);
	}
}
