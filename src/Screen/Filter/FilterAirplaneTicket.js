import React, { Component } from "react";
import { StyleSheet, ScrollView, Dimensions, View, TouchableOpacity } from 'react-native'
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Container, Text, Header, Button, Icon, Left, Right, Body, Title, Input, ListItem, CheckBox } from "native-base";
const SCREEN_WIDTH = Dimensions.get('window').width
export default class FilterAirplaneTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkBox: false,
            sliderOneChanging: false,
            sliderOneValue: [5],
            multiSliderValue: [0, 10],
            nonCollidingMultiSliderValue: [0, 100],

        }
    }

    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    };

    sliderOneValuesChange = values => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    };

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    };

    multiSliderValuesChange = values => {
        this.setState({
            multiSliderValue: values,
        });
    };

    nonCollidingMultiSliderValuesChange = values => {
        this.setState({
            nonCollidingMultiSliderValue: values,
        });
    };

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432'>
                    <Left>
                        <Button transparent>
                            <Icon name='close' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Filter</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={styles.srollView}>
                    <Text style={styles.filterBy}>
                        Filter berdasarkan
                    </Text>
                    <View style={styles.card}>
                        <Text style={styles.titleFilter}>
                            Kisaran Harga
                        </Text>
                        <Text style={styles.subTitleFilter}>
                            per orang
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, padding: 8 }}>
                                <Text style={{ fontSize: 12, color: 'grey', }} >
                                    Harga terendah
                                </Text>
                                <Input placeholder="" style={{ borderBottomColor: '#f97432', borderBottomWidth: 2 }} />
                            </View>
                            <View style={{ flex: 1, padding: 8 }}>
                                <Text style={{ fontSize: 12, color: 'grey', alignSelf: 'flex-end' }} >
                                    Harga tertinggi
                                </Text>
                                <Input placeholder="" style={{ borderBottomColor: '#f97432', borderBottomWidth: 2, textAlign: 'right' }} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginVertical: 20 }}>
                            <MultiSlider
                                values={[
                                    this.state.multiSliderValue[0],
                                    this.state.multiSliderValue[1],
                                ]}
                                sliderLength={SCREEN_WIDTH * 0.85}
                                onValuesChange={this.multiSliderValuesChange}
                                min={0}
                                max={10}
                                step={1}
                                allowOverlap
                                snapped
                                touchDimensions={{ height: 20, width: 60, borderRadius: 15, slipDisplacement: 200 }}
                                trackStyle={{
                                    height: 5,
                                }}
                                selectedStyle={{
                                    backgroundColor: 'gold',
                                }}
                                customMarker={() => (
                                    <View style={{ backgroundColor: '#fba432', height: 20, width: 20, borderRadius: 100 }}></View>
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleFilter}>
                            Transit
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.buttonPickerTransit}>
                                <Text style={styles.buttonPickerText}>
                                    Langsung
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPickerTransit}>
                                <Text style={styles.buttonPickerText}>
                                    1 Transit
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPickerTransit}>
                                <Text style={styles.buttonPickerText}>
                                    2+ Transit
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.card}>
                        <Text style={styles.titleFilter}>
                            Waktu Berangkat
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Pagi
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        00:00 - 11:00
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Siang
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        11:00 - 15:00
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Sore
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        15:00 - 18:30
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Malam
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        18:30 - 23:59
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleFilter}>
                            Waktu Tiba
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonPickerWaktu} >
                                    <Text style={styles.buttonPickerText}>
                                        Pagi
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        00:00 - 11:00
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Siang
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        11:00 - 15:00
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Sore
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        15:00 - 18:30
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonPickerWaktu}>
                                    <Text style={styles.buttonPickerText}>
                                        Malam
                                    </Text>
                                    <Text style={styles.buttonPickerText}>
                                        18:30 - 23:59
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={styles.card}>
                        <Text style={styles.titleFilter}>
                            Maskapai
                        </Text>
                        <ListItem>
                            <CheckBox checked={false} color="#f97432" />
                            <Body>
                                <Text>Lion Air</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="#f97432" />
                            <Body>
                                <Text>Garuda Indonesia</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="#f97432" />
                            <Body>
                                <Text>Batik Air</Text>
                            </Body>
                        </ListItem>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row',paddingHorizontal:20, paddingVertical:8 }}>
                                <View style={{flex:1}}>
                                <Button style={styles.buttonReset} onPress={() => alert('reset')} transparent><Text style={{ color: '#f97432' }} >RESET</Text></Button>

                                </View>
                                <View style={{flex:1}}>
                                <Button style={styles.buttonSimpan} onPress={() => alert('reset')} transparent><Text style={{ color: '#fff' }} >SIMPAN</Text></Button>

                                </View>
                            </View>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FB9D7B'
    },
    srollView: {
        backgroundColor: '#fafafa',
    },
    filterBy: {
        color: 'grey',
        marginTop: 17,
        margin: 15,
        fontSize: 14,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 10
    },
    titleFilter: {
        fontWeight: 'bold',
        color: '#4d4d4d'
    },
    subTitleFilter: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 25
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonPickerTransit: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: 'center'
    },
    buttonPickerWaktu: {
        flex: 1,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#eee',
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: 'center'
    },
    buttonPickerText: {
        fontSize: 14,
    },
    buttonReset: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		marginLeft: 10,
        marginRight: 5,
        height: 35
	},
	buttonSimpan: {
		justifyContent: 'center',
		backgroundColor: '#f97432',
		marginRight: 10,
        marginLeft: 5,
        height: 35
	}
})