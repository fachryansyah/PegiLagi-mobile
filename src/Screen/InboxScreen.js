import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Body,
  Text,
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

  __renderInbox() {
    return (
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
    )
  }

  __renderInboxEmpty() {
    return (
      <View style={{ flex: 1, alignItems:'center', padding:10}}>
        <Image
          style={{marginBottom:40, marginTop:120, width: 180, height: 180, alignSelf:'center' }}
          source={require('../Assets/Images/amplop.png')}
        />
        <Text style={{fontSize:20, fontWeight:'bold',color: '#4f4e43', marginVertical: 15}}>Belum Ada Pesan Masuk</Text>
        <Text style={{fontSize:16,color: '#4f4e43', textAlign:'center'}}>Tapi nanti kalau sudah ada, pesannya akan kelihatan di sini</Text>
      </View>
    )
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
            {this.state.inbox.length > 0 ? this.__renderInbox() : this.__renderInboxEmpty()}
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