import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import {
    Text,
    Container,
    Content,
    Header,
    Button,
    Left,
    Right,
    Icon,
    Input,
    Grid,
    Col
} from 'native-base'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'

export default class SearchStation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSearch: true,
            historyStasiun: [
                {
                    city: 'Bandung',
                    NameStation: 'BD - Bandung'
                }
            ],
            stasiun: [
                {
                    city: 'Bandung',
                    NameStation: 'BD - Bandung'
                },
                {
                    city: 'Bekasi',
                    NameStation: 'BKS - Bekasi'
                },
                {
                    city: 'Jakarta',
                    NameStation: 'CKG - Cakung'
                },
                {
                    city: 'Jakarta',
                    NameStation: 'GMR - Gambir'
                },
                {
                    city: 'Bandung',
                    NameStation: 'BD - Bandung'
                },
                {
                    city: 'Bekasi',
                    NameStation: 'BKS - Bekasi'
                },
                {
                    city: 'Jakarta',
                    NameStation: 'CKG - Cakung'
                },
                {
                    city: 'Jakarta',
                    NameStation: 'GMR - Gambir'
                }
            ]
        }
    }

    __renderSearch() {
        return (
            <Content>
                <Grid style={{
                    backgroundColor: '#fafafa',
                    height: 60,
                    justifyContent: 'center',
                    paddingLeft: 12,
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingRight: 12
                }}>
                    <Col>
                        <Text style={{ color: '#838383' }}>
                            Pencarian terakhir
                        </Text>
                    </Col>
                    <Col style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => alert('Yakin Hapus Aku!')}>
                            <View>
                                <Text style={{ color: '#f97432' }}>
                                    HAPUS SEMUA
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Col>
                </Grid>
                <FlatList
                    data={this.state.historyStasiun}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, key }) => (
                        <TouchableOpacity onPress={() => alert('Mau kemana!')}>
                            <Grid style={styles.cardStation}>
                                <Col>
                                    <Text style={{ color: '#4c4b3f' }}>{item.city}</Text>
                                    <Text style={{ color: '#838383', fontSize: 15 }}>{item.NameStation}</Text>
                                </Col>
                                <Right>
                                    <Col>
                                        <View style={styles.cardStationIcon}>
                                            <Text style={{ color: '#969696' }}>
                                                <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={18} name={'train'} /> Stasiun
                                    </Text>
                                        </View>
                                    </Col>
                                </Right>
                            </Grid>
                        </TouchableOpacity>
                    )}
                />

            </Content>
        )
    }

    __renderNotSearch() {
        return (
            <Content>
            </Content>
        )
    }


    render() {
        return (
            <>
                <Container style={styles.body}>
                    <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                        <Grid>
                            <Col style={{ width: '15%' }}>
                                <Button transparent onPress={() => alert('oke')}>
                                    <Left>
                                        <Icon name='arrow-back' style={{ color: '#ffff' }} />
                                    </Left>
                                </Button>
                            </Col>
                            <Col style={{ width: '70%' }}>
                                <Input
                                    style={styles.inputSearch}
                                    placeholder="Cari kota atau stasiun..."
                                    placeholderTextColor="#f2d5a1" />
                            </Col>
                            <Col style={{ width: '15%' }}>
                                <Button transparent onPress={() => alert('oke')}>
                                    <Button transparent onPress={() => alert('oke')}>
                                        <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={25} name={'search'} />
                                    </Button>
                                </Button>
                            </Col>
                        </Grid>
                    </Header>
                    <Content>
                        {this.state.isSearch ? this.__renderSearch() : this.__renderNotSearch()}
                        <View style={{
                            backgroundColor: '#fafafa',
                            height: 60,
                            justifyContent: 'center',
                            paddingLeft: 12
                        }}>
                            <Text style={{ color: '#838383' }}>
                                Kota atau Stasiun Populer
                            </Text>
                        </View>
                        <FlatList
                            data={this.state.stasiun}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, key }) => (
                                <TouchableOpacity onPress={() => alert('Mau kemana!')}>
                                    <Grid style={styles.cardStation}>
                                        <Col>
                                            <Text style={{ color: '#4c4b3f' }}>{item.city}</Text>
                                            <Text style={{ color: '#838383', fontSize: 15 }}>{item.NameStation}</Text>
                                        </Col>
                                        <Right>
                                            <Col>
                                                <View style={styles.cardStationIcon}>
                                                    <Text style={{ color: '#969696' }}>
                                                        <FontAwesomeIcons style={[{ color: '#d9d9d9' }]} size={18} name={'train'} /> Stasiun
                                                    </Text>
                                                </View>
                                            </Col>
                                        </Right>
                                    </Grid>
                                </TouchableOpacity>
                            )}
                        />
                    </Content>
                </Container>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffa500',
        paddingTop: 7,
        paddingBottom: 7
    },
    body: {
        flex: 1,
    },
    inputSearch: {
        backgroundColor: '#e6ad45',
        borderRadius: 5,
        color: '#ffff'
    },
    cardStation: {
        height: 70,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 20,
        paddingBottom: 20
    },
    cardStationIcon: {
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})