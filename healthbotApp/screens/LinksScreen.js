import React from 'react';
import {
  ActivityIndicator,
  Alert,
  AppState,
  AsyncStorage,
  Image,
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Expo, {
  Constants,
  Contacts,
  Location,
  IntentLauncherAndroid,
  Notifications,
  Permissions,
} from 'expo';
import Touchable from 'react-native-platform-touchable';

export default class LinkScreen extends React.Component {
  static navigationOptions = {
    title: 'Carts',
  };

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: () => false,
      sectionHeaderHasChanged: () => false,
    }),
  };

  componentWillMount() {
    this._notificationSubscription = Notifications.addListener(this._handleNotification);

    /* this._tabPressedListener = NavigationEvents.addListener('selectedTabPressed', route => {
      if (route.key === 'ExpoApis') {
        this._scrollToTop();
      }
    }); */
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
    //this._tabPressedListener.remove();
  }

  _handleNotification = notification => {
    let { data, origin, remote } = notification;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    /**
     * Currently on Android this will only fire when selected for local
     * notifications, and there is no way to distinguish between local
     * and remote notifications
     */

    let message;
    if (Platform.OS === 'android') {
      message = `Notification ${origin} with data: ${JSON.stringify(data)}`;
    } else {
      if (remote) {
        message = `Push notification ${origin} with data: ${JSON.stringify(data)}`;
      } else {
        message = `Local notification ${origin} with data: ${JSON.stringify(data)}`;
      }
    }

    // Calling alert(message) immediately fails to show the alert on Android
    // if after backgrounding the app and then clicking on a notification
    // to foreground the app
    setTimeout(() => alert(message), 1000);
  };

  componentDidMount() {
    let dataSource = this.state.dataSource.cloneWithRowsAndSections({

      LocalNotification: [this._renderLocalNotification],
      Location: [this._renderLocation],
      PushNotification: [this._renderPushNotification],
      ...Platform.select({
        android: {
          Settings: [this._renderSettings],
        },
        ios: {},
      }),

    });

    this.setState({ dataSource });
  }



  
  

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'center',
      }}>
          <LocationExample />
      </View>
    );
  }



}



  class LocationExample extends React.Component {
    state = {
      singleLocation: null,
      singleHeading: null,
      searching: false,
      watchLocation: null,
      watchHeading: null,
      providerStatus: null,
      subscription: null,
      headingSubscription: null,
      checkingProviderStatus: false,
    };
  
  
    _findSingleLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        return;
      }
  
      try {
        this.setState({ searching: true });
        let result = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        this.setState({ singleLocation: result });
      } finally {
        this.setState({ searching: false });
      }
    };
  
    _startWatchingLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        return;
      }
  
      let subscription = await Location.watchPositionAsync(
        {
          enableHighAccuracy: true,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        location => {
          console.log(`Got location: ${JSON.stringify(location.coords)}`);
          this.setState({ watchLocation: location });
        },

      );
  
      this.setState({ subscription });
      //let latitude = this.state.watchLocation.coords.latitude;
      //let longitude = this.state.watchLocation.coords.longitude;
      this._presentLocalNotification;
    };
  
    _stopWatchingLocation = async () => {
      this.state.subscription.remove();
      this.setState({ subscription: null, watchLocation: null });
    };
  
  
    _checkProviderStatus = async () => {
      this.setState({
        checkingProviderStatus: true,
      });
      const status = await Location.getProviderStatusAsync();
      console.log(JSON.stringify(status));
      this.setState({
        providerStatus: status,
        checkingProviderStatus: false,
      });
    };
  
    renderSingleLocation() {
      if (this.state.searching) {
        return (
          <View style={{ padding: 10 }}>
            <ActivityIndicator />
          </View>
        );
      }
  
      if (this.state.singleLocation) {
        return (
          <View style={{ padding: 10 }}>
            <Text>
              {this.props.polyfill
                ? 'navigator.geolocation.getCurrentPosition'
                : 'Location.getCurrentPositionAsync'}
              :
            </Text>
            <Text>Latitude: {this.state.singleLocation.coords.latitude}</Text>
            <Text>Longitude: {this.state.singleLocation.coords.longitude}</Text>
          </View>
        );
      }
  
      return (
        <View style={{ padding: 10 }}>
          <Button
            onPress={
              this.props.polyfill ? this._findSingleLocationWithPolyfill : this._findSingleLocation
            }>
            Find my location once
          </Button>
        </View>
      );
    }
  
    renderProviderStatus() {
      if (this.state.checkingProviderStatus) {
        return (
          <View style={{ padding: 10 }}>
            <ActivityIndicator />
          </View>
        );
      }
  
      if (this.state.providerStatus) {
        return (
          <View style={{ padding: 10 }}>
            <Text>Enabled: {String(this.state.providerStatus.locationServicesEnabled)}</Text>
            <Text>GPS Available: {String(this.state.providerStatus.gpsAvailable)}</Text>
            <Text>Network Available: {String(this.state.providerStatus.networkAvailable)}</Text>
            <Text>Passive Available: {String(this.state.providerStatus.passiveAvailable)}</Text>
          </View>
        );
      }
  
      return (
        <View style={{ padding: 10 }}>
          <Button onPress={this._checkProviderStatus}>Check provider status</Button>
        </View>
      );
    }
  
    renderWatchLocation() {
      if (this.state.watchLocation) {
        return (
          <View style={{ padding: 10 }}>
            <Text>
              {this.props.polyfill
                ? 'navigator.geolocation.watchPosition'
                : 'Location.watchPositionAsync'}
              :
            </Text>
            <Text>Latitude: {this.state.watchLocation.coords.latitude}</Text>   
            <Text>Longitude: {this.state.watchLocation.coords.longitude}</Text>
            <View style={{ padding: 10 }}>
              <Button onPress={this._stopWatchingLocation}>Stop Watching Location</Button>
            </View>
          </View>
        );
      } else if (this.state.subscription) {
        return (
          <View style={{ padding: 10 }}>
            <ActivityIndicator />
          </View>
        );
      }
  
      return (
        <View style={{ padding: 10 }}>
          <Button
            onPress={
              this.props.polyfill
                ? this._startWatchingLocationWithPolyfill
                : this._locateAndPush
            }>
            Watch my location
          </Button>
        </View>
      );
    }
  
  
    render() {
      return (
        <View>
          {this.props.polyfill ? null : this.renderProviderStatus()} 
          {this.renderSingleLocation()}
          {this.renderWatchLocation()}
        </View>
      );
    };

    _presentLocalNotification = () => {
      Notifications.presentLocalNotificationAsync({
        title: 'Here is a local notification!',
        body: 'This is the body',
        data: {
          discount: 'Pain killer 10% off',
        },
        ios: {
          sound: true,
        },
        android: {
          vibrate: true,
        },
      });
    };
  
    _scheduleLocalNotification = () => {
      Notifications.scheduleLocalNotificationAsync(
        {
          title: 'Remember to put your sunscreen on!',
          body: 'Sunblock X 10 % off',
          data: {
            discount: 'Pain Killer 10% off'
          },
          ios: {
            sound: true,
          },
          android: {
            vibrate: true,
          },
        },
        {
          time: new Date().getTime() + 10000,
        }
      );
    };

    _locateAndPush = () => {
      this._startWatchingLocation();
      //this.state.watchLocation.coords.latitude;
      this._scheduleLocalNotification();
    }
  }





  function Button(props) {
    return (
      <Touchable onPress={props.onPress} style={[styles.button, props.style]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Touchable>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
    },
    sectionHeader: {
      backgroundColor: 'rgba(245,245,245,1)',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    button: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 3,
      backgroundColor: "#dd4c46",
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
    },
  });
  

