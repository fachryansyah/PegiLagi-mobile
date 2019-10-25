import React, {Component} from 'react';
import MainNavigation from './src/Navigation';
import OneSignal from 'react-native-onesignal'
import { Provider } from 'react-redux'
import Store from './src/Redux/store'

class App extends Component {
  constructor(props){
    super(props)
    OneSignal.init("f92710d4-e273-40f1-b57a-ca5ccb1d05c3");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  
  render() {
    return (
      <Provider store={Store}>
        <MainNavigation />
      </Provider>
    );
  }
}

export default App;