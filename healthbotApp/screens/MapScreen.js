import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { 
  Text, 
  View,
  StyleSheet,  
  Constants,  
  Platform, 
} from 'react-native';
import { LinearGradient } from 'expo';
import { MapView } from 'expo';

import { 
  List, 
  ListItem, 
  SearchBar,
  Header,
  Icon,
  PricingCard,
  Card,
  Button,
 } from 'react-native-elements';

 const lilRed = "#dd4c46";
 const lilOrange = '#ffac42';

export default class MapScreen extends React.Component {
  render() {
    return (
      

      /* <View>
      <View style={styles.statusBar} />
        <Header
          leftComponent={this._renderGoBackIcon()}
          centerComponent={{ text: 'My Cart (1)', style: { color: '#fff',fontSize:20 } }}
          rightComponent={{ icon: 'playlist-add', color: '#fff' }}
          backgroundColor = "#dd4c46"
        />
        
      </View> */

      

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 40.7128,
          longitude: -74.0060,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      


    
    );
  }

  _renderGoBackIcon = () => {
    return(
    <Icon
    
    name='arrow-back'
    //type='font-awesome'
    color='#fff'
    onPress={() => this.props.navigation.goBack(null)} />
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStyle:{
    width: 50, 
    height: 50, 
    backgroundColor: 'steelblue'
  },
  /* statusBar: {
    backgroundColor: "#dd4c46",
    height: Constants.statusBarHeight,
  }, */
  itemBarInfoContainer: {
    
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 0,
  },
  titleBarInfoContainer: {
    backgroundColor: lilRed,
    
    /* ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }), */
    alignItems: 'flex-start',
    //backgroundColor: '#f4f4f4',
    paddingTop: 15,
    paddingBottom:15,
    
  },
  checkOutBar: {
    flex: 0,
    //width: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    
  },
  totalBarInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
