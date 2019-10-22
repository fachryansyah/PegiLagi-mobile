import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'
import {
    Text,
    Content
} from 'native-base'

export default class TravelTips extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            slideshow: [
                {
                    id: 1,
                    image: require('../Assets/Images/slide1.jpg')
                },
                {
                    id: 2,
                    image: require('../Assets/Images/slide2.jpg')
                },
                {
                    id: 3,
                    image: require('../Assets/Images/slide3.jpg')
                },
                {
                    id: 4,
                    image: require('../Assets/Images/slide4.jpg')
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Content contentContainerStyle={{ alignItems: 'center', marginTop: 16 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.slideshow}
                        renderItem={({ item, key }) => (
                            <Content contentContainerStyle={styles.container}>
                                <Image source={require('../Assets/Images/slide4.jpg')} style={styles.image} />
                                <Text style={styles.textCategory}>Rekomendasi</Text>
                                <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            </Content>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </Content>
            </>
        )
    }
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        padding: 6,
        width: SCREEN_WIDTH * 0.8
    },
    image: {
        width: SCREEN_WIDTH * 0.77,
        height: SCREEN_WIDTH * 0.4,
        borderRadius: 6
    },
    textCategory: {
        marginTop: 8,
        color: '#666666'
    },
    textDescription: {
        marginTop: 8
    }
})