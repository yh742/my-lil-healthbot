import React from 'react';


import {
  StackNavigator,
} from 'react-navigation';

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
  TouchableOpacity,
  //Button,
} from 'react-native';
import Expo, {
  Constants,
  Contacts,
  Location,
  IntentLauncherAndroid,
  Notifications,
  Permissions,
  MapView,
} from 'expo';

import { 
  List, 
  ListItem, 
  SearchBar,
  Header,
  Icon,
 } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };
  
   state = {
     dataSource: new ListView.DataSource({
       rowHasChanged: () => false,
       sectionHeaderHasChanged: () => false,
     }),
   };
 
   componentWillMount() {
     this._notificationSubscription = Notifications.addListener(this._handleNotification);
 
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

   /* _handleGo = () => {
    this.props.navigation.navigate('Screen_B');
  } */

  _renderGoBackIcon = () => {
    return(
    <Icon
    
    name='chevron-left'
    //type='font-awesome'
    color='#fff'
    onPress={() => this.props.navigation.goBack(null)} />
    );

  }

  _handleGo = () => {
    this.props.navigation.navigate('Screen_B');
  }
 

 
   render() {
     return (
       <View style={styles.container}>
         <Header
            leftComponent={this._renderGoBackIcon()}
            centerComponent={{ text: 'Find My Lil Healthbot', style: { color: '#fff',fontSize:20 } }}
            //rightComponent={{ icon: 'playlist-add', color: '#fff' }}
            backgroundColor = "#dd4c46"
          />
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
           <LocationExample />
           <TouchableOpacity onPress = {this._handleGo}>
      <Image 
      style={{width: 200, height: 200}}
      source = {require('../assets/images/map.png')}
      />
      </TouchableOpacity>
       </View>
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
       //let longitude = this.state.watchLocation.coords.longitude;
       //if (this.state.watchLocationc == null) {
         //this._presentLocalNotification();
         //let longitude = this.state.watchLocation.coords.longitude;
     //}
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
               this._findSingleLocation
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
         let latitude = this.state.watchLocation.coords.latitude;
         if(latitude - 40 < 1)  this._scheduleLocalNotification();
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
           title: 'YOU ARE NEAR THE BOT',
           body: 'Pain Killer has been vended',
           data: {
             Product: 'Pain Killer',
             Discount: '10 off',
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
       //this._scheduleLocalNotification();
     }
   }
 

 

  class MapScreen extends React.Component {

    static navigationOptions = {
      title: 'Find you Bot',
      header: null,
    };

    render() {
      return (
        
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 40.755652,
            longitude: -73.955084,
            latitudeDelta: 0.00922/8,
            longitudeDelta: 0.00421/8,
          }}
        >
  
        <MapView.Marker
        coordinate={{latitude: 40.755652,
          longitude: -73.955084,}}
        title={'My LilHealbot'}
        description={'My LilHealbot'}
        image={require('../assets/images/placeholder.png')}
      />
  
        <MapView.Marker
        coordinate={{latitude: 40.755652,
          longitude: -73.955084,}}
        title={'Me'}
        description={'My Location'}
        image={require('../assets/images/mylocation.png')}
      />
      </MapView>
      
  
  
      );
    }
  }
 


  const MapPush = StackNavigator({
    mapHome: {
      screen: HomeScreen,
    },
    Screen_B: {
      screen: MapScreen,
    },
  
  });
  
  export default MapPush
 
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
       backgroundColor: '#fff',
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