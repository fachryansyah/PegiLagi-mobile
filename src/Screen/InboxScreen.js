import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl
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
import Http from '../Helpers/Http';
export default class InboxScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
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

  componentDidMount(){
    this.getPromotion()
  }

  async getPromotion(){
    await Http.get('/article/promotion')
    .then((res) => {
      this.setState({
        inbox: res.data.data,
        isLoading: false
      })
    })
    .catch((err) => {
      console.log(err)
      this.setState({
        isLoading: false
      })
    })
  }

  __renderInbox() {
    return (
      <FlatList
        data={this.state.inbox}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.getPromotion()} />
        }
        renderItem={({ item, key }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('WebViewScreen', {url: item.url, title: item.title})}>
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
                      {item.title}
                    </Text>
                    <Text style={styles.inboxTextDetail}>
                      {item.category}
                    </Text>
                    <Text style={styles.inboxTextDetail}>
                      2 jam yang lalu
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