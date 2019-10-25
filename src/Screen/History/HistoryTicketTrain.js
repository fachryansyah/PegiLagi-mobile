import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
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
    Icon
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Dash from 'react-native-dash'
export default class HistroyTicketTrain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            HistroyTicketTrain: [
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
                {
                    dateOfDeparture: '08 Nov 2019',
                    totalPassenger: '1 Penumpang (1 Dewasa)',
                    codeNameFromStasion: 'GMR',
                    codeNameToStasion: 'SGU',
                    nameFromStasion: 'Gambir',
                    nameToStasion: 'Surabaya Gubeng'
                },
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                < Left >
                                    <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 25, marginTop: 5 }}>
                                Terakhir dilihat
                            </Text>
                        </Col>
                        <View>
                            <Button
                                style={{ height: 40, width: 40, backgroundColor: '#d58a00', position: 'absolute' }}
                                transparent onPress={() => alert('Delete!')}>
                                <MaterialCommunityIcons style={[{ color: '#ffff' }]} size={25} name={'delete-outline'} />
                            </Button>
                        </View>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.HistroyTicketTrain}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => alert('History Ticket Train!')} style={{ marginBottom: 15 }}>
                                    <View style={{ backgroundColor: '#ffff', paddingHorizontal: 15, paddingVertical: 20 }}>
                                        <Grid>
                                            <Col style={{ width: '60%' }}>
                                                <Text style={{ color: '#4d4f44', fontSize: 16 }}>
                                                    {item.dateOfDeparture}
                                                </Text>
                                                <Text style={{ color: '#4d4f44', fontSize: 15, marginVertical: 7 }}>
                                                    {item.totalPassenger}
                                                </Text>
                                            </Col>
                                            <Col style={{ alignItems: 'flex-end', paddingTop: 10 }}>
                                                <TouchableOpacity onPress={() => alert('Hapus!')}>
                                                    <Text style={{ fontSize: 14, color: '#FF681B' }}>HAPUS</Text>
                                                </TouchableOpacity>
                                            </Col>
                                        </Grid>
                                        <Dash style={{ width: '100%', height: 1, marginVertical: 15 }} dashColor='#d9d9d9' />
                                        <Grid style={{ marginVertical: 5 }}>
                                            <Col style={{ width: '70%' }}>
                                                <Text style={{ color: '#4d4f44' }}>
                                                    <MaterialCommunityIcons style={[{ color: '#f97432' }]} size={16} name={'train'} /> {item.codeNameFromStasion} <MaterialCommunityIcons size={15} name={'arrow-right'} style={{ color: '#898989' }} /> {item.codeNameToStasion}
                                                </Text>
                                                <Text style={{ fontSize: 12, color: '#898989', marginLeft: 20 }}>{item.nameFromStasion} - {item.nameToStasion} </Text>
                                            </Col>
                                            <Col style={{ width: '30%' }}>
                                                <View style={styles.cardStationIcon}>
                                                    <Text style={{ color: '#969696', fontSize: 12 }}>
                                                        Sekali Jalan
                                                </Text>
                                                </View>
                                            </Col>
                                        </Grid>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffa500',
        paddingTop: 7,
        paddingBottom: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    cardStationIcon: {
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        paddingVertical: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
})