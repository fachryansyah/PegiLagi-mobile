import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
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
  Gird,
  Col,
  Grid
} from 'native-base';
import { black } from 'ansi-colors';
export default class InboxScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inbox: [
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        },
        {
          titleHeader: 'Pengen Diskon Tiket Pesawat & Hotel s.d. 60%?',
          titleBody: 'Sebentar lagi koq. Siap-siap ya!',
          titleFooter: '7 jam yang lalu'
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#f97432' style={{ backgroundColor: '#f97432' }}>
          <Body>
            <Title>Inbox</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            <FlatList
              data={this.state.inbox}
              keyExtractor={(item) => item.id}
              renderItem={({ item, key }) => (
                <TouchableOpacity onPress={() => alert('Woi!!!')}>
                  <Grid>
                    <Col style={styles.colInbox}>
                      <Grid>
                        <Col style={styles.colInboxIcon}>
                          <View>
                            <MaterialIcons style={[{ color: '#d9d9d9' }]} size={25} name={'brightness-percent'} />
                          </View>
                        </Col>
                        <Col style={styles.colInboxText}>
                          <Text style={{ fontSize: 14, marginBottom: 5 }}>
                            {item.titleHeader}
                          </Text>
                          <Text style={styles.inboxTextDetail}>
                            {item.titleBody}
                          </Text>
                          <Text style={styles.inboxTextDetail}>
                            {item.titleFooter}
                          </Text>
                        </Col>
                      </Grid>
                    </Col>
                  </Grid>
                </TouchableOpacity>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  colInbox: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
    // padding: 10
  },
  colInboxIcon: {
    backgroundColor: '#fff',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colInboxText: {
    backgroundColor: 'white',
    width: '85%',
    paddingTop: 7,
    paddingRight: 20
  },
  inboxTextDetail: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 5
  }
})