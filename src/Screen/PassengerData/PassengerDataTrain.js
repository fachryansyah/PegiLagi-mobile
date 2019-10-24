import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
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
    Icon,
    CheckBox,
    Item,
    Label,
    Input,
    Picker
} from 'native-base';
export default class PassengerDataTrain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTitel: undefined,
            selectedIdentitas: undefined
        }
    }

    onValueChangeTitel(value) {
        this.setState({
            selectedTitel: value
        });
    }

    onValueChangeIdentitas(value) {
        this.setState({
            selectedIdentitas: value
        });
    }

    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor='#f97432' noShadow={true}>
                    <Grid>
                        <Col style={{ width: '15%' }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('BookingTicketTrain')}>
                                <Left>
                                    <Icon name='close' style={{ color: '#ffff' }} />
                                </Left>
                            </Button>
                        </Col>
                        <Col style={{ width: '78%' }}>
                            <Text style={{ color: '#ffff', fontSize: 20, marginTop: 7 }}>
                                Data Penumpang
                            </Text>
                        </Col>
                    </Grid>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Grid>
                            <Col style={{ width: '10%' }}>
                                <CheckBox checked={true} color='#f97432' />
                            </Col>
                            <Col style={{ width: '80%' }}>
                                <Text style={{ color: '#898989' }}> Samakan dengan data pemesan</Text>
                            </Col>
                        </Grid>
                        <Grid style={{ marginTop: 20, marginBottom: 3 }}>
                            <Col>
                                <Text style={{ color: '#898989', fontSize: 13, marginTop: 20 }}>Titel</Text>
                            </Col>
                        </Grid>
                        <Grid style={{}}>
                            <Col>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selectedTitel}
                                        onValueChange={this.onValueChangeTitel.bind(this)}
                                    >
                                        <Picker.Item label="Tuan" value="Tuan" />
                                        <Picker.Item label="Nyonya" value="Nyonya" />
                                        <Picker.Item label="Nona" value="Nona" />
                                    </Picker>
                                </Item>
                            </Col>
                        </Grid>
                        <Grid style={{ marginTop: 40 }}>
                            <Col>
                                <Item floatingLabel>
                                    <Label style={{ color: '#898989' }}>Nama penumpang</Label>
                                    <Input />
                                </Item>
                                <Text style={{ color: '#898989', fontSize: 14, marginTop: 10 }}>Sesuai kartu identitas</Text>
                            </Col>
                        </Grid>
                        <Grid style={{ marginTop: 10 }}>
                            <Col>
                                <Text style={{ color: '#898989', fontSize: 13, marginTop: 20 }}>Identitas</Text>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col style={{ width: '35%' }}>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selectedIdentitas}
                                        onValueChange={this.onValueChangeIdentitas.bind(this)}
                                    >
                                        <Picker.Item label="KTP" value="KTP" />
                                        <Picker.Item label="SIM" value="SIM" />
                                        <Picker.Item label="Paspor" value="Paspor" />
                                        <Picker.Item label="Lainnya" value="Lainnya" />
                                    </Picker>
                                </Item>
                            </Col>
                            <Col>
                            </Col>
                            <Col style={{ width: '60%' }}>
                                <Item floatingLabel>
                                    <Label style={{ color: '#898989' }}>Nomor identitas</Label>
                                    <Input />
                                </Item>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <Text style={{ color: '#898989', fontSize: 12, marginTop: 40 }}>Untuk penumpang berusia kurang dari 17 tahun, masukkan tanggal kelahiran dengan format YYYYMMDD</Text>
                            </Col>
                        </Grid>
                        <TouchableOpacity onPress={() => alert('SIMPAN!')} style={{ backgroundColor: '#f97432', marginTop: 15 }}>
                            <Text style={{ fontSize: 16, color: '#ffff', textAlign: "center", paddingVertical: 10 }}>SIMPAN</Text>
                        </TouchableOpacity>
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
        paddingVertical: 30,
        paddingHorizontal: 15
    },
})