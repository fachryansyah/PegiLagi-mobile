import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Content
} from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel'

export default class Slideshow extends Component {

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

    get pagination() {
        const { slideshow, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={slideshow.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: '#fff' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    backgroundColor: '#f97432'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <>
                <Content contentContainerStyle={{ alignItems: 'center', marginTop: 16 }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.data}
                        renderItem={({ item, key }) => (
                            <TouchableOpacity onPress={() => this.props.navigate('WebViewScreen', {url: item.url, title: item.title})} activeOpacity={0.7}>
                                <Content contentContainerStyle={styles.container}>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                </Content>
                            </TouchableOpacity>
                        )}
                        sliderWidth={SCREEN_WIDTH}
                        itemWidth={SCREEN_WIDTH * 0.7}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                    {/* {this.pagination} */}
                </Content>
            </>
        )
    }
}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6
    },
    image: {
        width: '100%',
        height: SCREEN_WIDTH * 0.38,
        borderRadius: 6
    }
})