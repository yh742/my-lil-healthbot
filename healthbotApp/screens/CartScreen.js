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
  TouchableOpacity,
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
  CheckBox,
 } from 'react-native-elements';
//import ActionBar from './assets/action-bar/ActionBar'
import HistoryScreen from '../screens/HistoryScreen';

import { Constants } from 'expo';
/* import { 
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  SimpleLineIcons,
} from '@expo/vector-icons'; */

import {
  StackNavigator,
} from 'react-navigation';

const lilRed = "#dd4c46";
const lilOrange = '#ffac42';


class OrderDone extends Component {

  static navigationOptions = {
    header: null,
  };

  render(){
    return(
      <View style = {styles.container}>
      <TouchableOpacity onPress = {() => this.props.navigation.navigate('Order')}>
      <Image 
      style={{width: 380, height: 675}}
      source = {require('../assets/images/orderdone.png')}
      onPress = {() => this.props.navigation.navigate('Screen_C')}/>
      </TouchableOpacity>

      </View>

    );
  }

  

};




class CartScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View>
        {/* <View style={styles.statusBar} /> */}
        <StatusBar
          backgroundColor = "white"
          barStyle = "light-content"
        />
          <Header
            leftComponent={this._renderGoBackIcon()}
            centerComponent={{ text: 'My Cart (1)', style: { color: '#fff',fontSize:20 } }}
            //rightComponent={{ icon: 'playlist-add', color: '#fff' }}
            backgroundColor = "#dd4c46"
          />
          {/* <SearchBar
                lightTheme
                placeholder='Type Here to search...'
          /> */}

        </View>


        {/* <View>
          <View style={styles.titleBarInfoContainer}>
          <Text style={{color:'#fff',fontSize:20}}>    My Cart (1)</Text>
          </View>
        </View> */}

        {this._renderCheckOutStaus()}
      
      <ScrollView 
        backgroundColor = '#f4f4f4'
        borderColor = '#f4f4f4'
        borderRadius = '10'
      >
        <View>
          <View style={{justifyContent: 'space-around'}} />
        
          {this._renderProductCard()}
          {this._renderPricingCard()}
          {this._renderPricingCard()}
          
        </View>
      </ScrollView>
      {this._renderTabBar()}
      
      </View>

      
    );
  }

  _handleGo = () => {
    this.props.navigation.navigate('Screen_B');
  }
 
  _renderCheckOutStaus = () => {
    return(
      <View style={styles.checkOutBar}>
        <Text style={{color:'#000',fontSize:15}}>     You have 1 item(s) in your cart</Text>
        <Button
          raised
          //icon={{name: 'cached'}}
          title='CHECKOUT' 
          //fontSize
          backgroundColor = '#ffac42'
          onPress = {this._handleGo}
          />
      </View>
    );

  }



  _renderGoBackIcon = () => {
    return(
    <Icon
    
    name='chevron-left'
    //type='font-awesome'
    color='#fff'
    onPress={() => this.props.navigation.goBack(null)} />
    );

  }


  _renderTabBar = () => {
    return(
    <View style={styles.totalBarInfoContainer}>
      <Text style={styles.tabBarInfoText}>    Total</Text>
      <Text style = {{color:lilRed,}}>$10.99    </Text>
    </View>);
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

  _renderProductCard = () => {
    return(
      <View>
        <View style={styles.itemBarInfoContainer} />
        <Card
          flexDirection = 'row'
          //title = 'REKAXX'
          //featuredTitleStyle = {{}}
          //image={require('./assets/rekaxx.png')}
          //imageStyle = {{width: 100, height: 100}}
          wrapperStyle = {{backgroundColor:'#fff'}}
          >
          <View 
          style={styles.checkOutBar}
          >
            <Image
              style={{width: 60, height: 60}}
              source={require('../assets/images/rekaxx.png')}
            />
            <View>
              
              <Text style={{color:'#000',fontSize:15}}>   REKAXX Pain Killer</Text>
              <Text style={{color:'#000',fontSize:13}}>   x 1</Text>
              <Text style={{color:'#1f0f0f',fontSize:10}}>   $10.99     </Text>
              </View>

              <View style={{width:100}} />

            
              <Icon
                name='ios-close-outline'
                type='ionicon'
                color='#000'
            
                />
            
          </View>
          
          
        </Card>
    </View>
    );
  }

};

const CheckOut = StackNavigator({
  Cart: {
    screen: CartScreen,
  },
  Screen_B: {
    screen: OrderDone,
  },

});

export default  CheckOut;

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
    backgroundColor: lilRed,
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
    /* ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }), */
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