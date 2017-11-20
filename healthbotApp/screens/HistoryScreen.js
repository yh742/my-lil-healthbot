import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScollView,
  ScrollView,
  Text,
  Platform,
  Image,
  StatusBar,
} from 'react-native';

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
//import ActionBar from './assets/action-bar/ActionBar'
import { Constants } from 'expo';


import { WebBrowser } from 'expo';

const lilRed = "#dd4c46";
const lilOrange = '#ffac42'

export default class HistoryScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View>
        <StatusBar
          //backgroundColor="blue"
          barStyle="light-content"
        />
          <Header
            leftComponent={this._renderGoBackIcon()}
            centerComponent={{ text: 'Order History', style: { color: '#fff',fontSize:20 } }}
            //rightComponent={{ icon: 'playlist-add', color: '#fff' }}
            backgroundColor = "#dd4c46"
          />
          <SearchBar
                lightTheme
                placeholder='Type Here to search...'
          />

        </View>

        {this._renderCheckOutStaus()}



        {/* <View style={styles.checkOutBar}>
        <Text style={{color:'#000',fontSize:15}}>  You have 1 item(s) in your cart</Text>
        <Button
          raised
          //icon={{name: 'cached'}}
          title='CHECKOUT' 
          //fontSize
          backgroundColor = '#ffac42'
          />
        </View>
       */}
      <ScrollView 
        backgroundColor = '#fbfbfb'
        borderColor = '#fbfbfb'
        borderRadius = '10'
      //style={styles.container} 
      //contentContainerStyle={styles.contentContainer}
      //  <View style={styles.titleBarInfoContainer} />
      >
        <View>
          <View style={{justifyContent: 'space-around'}} />
        
          {this._renderUnpickedHistoryCard()}
          {this._renderPickedHistoryCard()}
          {this._renderPickedHistoryCard()}
          {this._renderPickedHistoryCard()}

          
        </View>
      </ScrollView>
      {/* <View style={styles.totalBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>    Total</Text>
        <Text style = {{color:lilRed,}}>$10.99    </Text>
      </View> */}
      
      </View>

      
    );
  }

 /*  <View style={styles.totalBarInfoContainer}>
  <Text style={styles.tabBarInfoText}>    Total</Text>
  <Text style = {{color:lilRed,}}>$10.99    </Text>
</View> */


  _renderGoBackIcon = () => {
    return(
    <Icon
    
    name='chevron-left'
    //type='font-awesome'
    color='#fff'
    onPress={() => this.props.navigation.goBack(null)} />
    );

  }

  _renderPricingCard = () => {
    return(
      <View>
      <View style={styles.itemBarInfoContainer} />
      <PricingCard
      color='#4f9deb'
      title='This is the discount card'
      price='10% off'
      info={['1 User']}
      button={{ title: 'Find More', icon: 'add-shopping-cart' }}
    />
    </View>
    
    );    
  }

  _renderUnpickedHistoryCard = () => {
    let OrderNumber = Math.floor(Math.random() * 100000) + 1;
    return(
      <View>
        <Card
          flexDirection = 'column'
          //title = 'REKAXX'
          //featuredTitleStyle = {{}}
          //image={require('./assets/rekaxx.png')}
          //imageStyle = {{width: 100, height: 100}}
          >
          
          <View style={{
            backgroundColor: '#ffac42',
            justifyContent: 'flex-end',
            
            }}>
          <Text style={{color:'#fff',fontSize:18}}>  Unpicked Order</Text>
          </View>

          <View style={{
            backgroundColor: '#fbfbfb',
            justifyContent: 'space-between',
            padding:5,
            flexDirection: 'row',
            alignItems: 'center',
            }}>
          <Text style={{color:'#000',fontSize:18}}>#MLH{OrderNumber}</Text>
          <Text style={{color:'#0b0b0b',fontSize:10}}>13:00 p.m</Text>
          </View>


          <View 
          style={styles.historyBar}
          >
        
            <Icon
              name='wallet-giftcard'
              type='material-community'
              color='#000'
              size = {30}
            />
            <View style={{flexDirection: 'column'}}>
              
              <Text style={{color:'#000',fontSize:15}}>  REKAXX   </Text>
              <Text style={{color:'#000',fontSize:13}}>  my Card</Text>
            </View>

            <Text style={{color:'#1f0f0f',fontSize:15}}>      $10.99   </Text>
            <Button
              raised
          //icon={{name: 'cached'}}
              title='View Detail' 
          //fontSize
              backgroundColor = '#000'
              onPress = {this._handleHelpPress}
          />
            
          </View>
          
          
        </Card>
    </View>
    );
  }

  _renderPickedHistoryCard = () => {
    let itemCount = Math.floor(Math.random() * 10);
    let pric = itemCount * 10.99;
    let OrderNumber = Math.floor(Math.random() * 100000);
    return(
      <View>
        <Card
          flexDirection = 'column'
          //title = 'REKAXX'
          //featuredTitleStyle = {{}}
          //image={require('./assets/rekaxx.png')}
          //imageStyle = {{width: 100, height: 100}}
          >
          
          <View style={{
            backgroundColor: '#f0f0f0',
            justifyContent: 'flex-end',
            padding: 0,
            }}>
          <Text style={{color:'#000',fontSize:18}}>  Picked Order</Text>
          </View>

          <View style={{
            backgroundColor: '#fbfbfb',
            justifyContent: 'space-between',
            padding:5,
            flexDirection: 'row',
            alignItems: 'center',
            }}>
          <Text style={{color:'#000',fontSize:18}}>#MLH{OrderNumber}</Text>
          <Text style={{color:'#0b0b0b',fontSize:10}}>yesterday</Text>
          </View>

          <View 
          style={styles.historyBar}
          >
        
            <Icon
              name='wallet-giftcard'
              type='material-community'
              color='#000'
              size = {30}
            />
            <View style={{flexDirection: 'column'}}>
              
              <Text style={{color:'#000',fontSize:15}}>  XXXXXXX</Text>
              <Text style={{color:'#000',fontSize:13}}>  my Card</Text>
            </View>

            <Text style={{color:'#1f0f0f',fontSize:15}}>      ${pric}   </Text>
            <Button
              raised
          //icon={{name: 'cached'}}
              title='View Detail' 
          //fontSize
              backgroundColor = '#000'
              onPress = {this._handleHelpPress}
          />
            
          </View>
          
          
        </Card>
    </View>
    );
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://tech.cornell.edu/'
    );
  }

  _renderCheckOutStaus = () => {
    return(
      <View style={styles.checkOutBar}>
        <Text style={{color:'#000',fontSize:20}}>     Good afternoon Tom!</Text>
        <Button
          raised
          //icon={{name: 'cached'}}
          title='LOGOUT' 
          //fontSize
          backgroundColor = '#ffac42'
          onPress = {this._handleGo}
          />
      </View>
    );

  }

};

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
  statusBar: {
    backgroundColor: "#dd4c46",
    height: Constants.statusBarHeight,
  },
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
    backgroundColor: '#fbfbfb',
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
    //backgroundColor: '#fbfbfb',
    paddingTop: 15,
    paddingBottom:15,
    
  },
  checkOutBar: {
    flex: 0,
    //width: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 10,
  },
  historyBar: {
    flex: 1,
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});