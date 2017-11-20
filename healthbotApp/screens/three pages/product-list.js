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
  Button,
  Rating,
 } from 'react-native-elements';
import { Constants } from 'expo';
import { 
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';


export default class App extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar barStyle = 'light-content'/>
          <Header
            //leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Cough, Cold & Flu', style: { color: '#fff',fontSize:20 } }}
            //rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
            backgroundColor = "#dd4c46"
          />
          <SearchBar
                lightTheme
                placeholder='Type Here to search...'
                 />
        </View>
      
      <ScrollView 
      //style={styles.container} 
      //contentContainerStyle={styles.contentContainer}
      >
        <View style={{backgroundColor:'#f4f4f4', height: 50, alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{color: '#bcbcbc', fontSize: 16, fontWeight: "500"}}>     >>  Lastest Arrivals </Text>
        </View>
        <List>
          <View>
            <View style={{flexDirection: 'row', justifyContent:'flex-start',padding:2}}>
            <Icon
              type='evilicon'
              size={15}
              color='#389b11'
              name='check' />
              <Text style={{color: '#389b11', fontWeight: "500", fontSize: 10}}>Available at the nearest machine</Text>
            </View>
            <View style={{backgroundColor: '#ffac42', height: 1}}>
            </View>
            <ListItem
              roundAvatar
              title='Tylenol Exta Strength for runing nose, flu and cold'
              titleNumberOfLines={2}
              titleStyle={{fontSize: 12}}
              avatarContainerStyle={{width: 150, height: 100}}
              subtitle={
                <View style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
                  <Text style={{fontWeight:'bold', color:'red'}}>$9.30</Text>
                </View>
              }
              avatar={require('./assets/1.jpeg')}
              avatarStyle={{width: 150, height: 100}}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent:'flex-start',padding:2}}>
            <Icon
              type='evilicon'
              size={15}
              color='#389b11'
              name='check' />
              <Text style={{color: '#389b11', fontWeight: "500", fontSize: 10}}>Available at the nearest machine</Text>
            </View>
            <View style={{backgroundColor: '#ffac42', height: 1}}>
            </View>
          <ListItem
            roundAvatar
            title='Sudafed PE Sinus Pressure + Pain + Cold'
            titleNumberOfLines={2}
            titleStyle={{fontSize: 12}}
            avatarContainerStyle={{width: 150, height: 100}}
            subtitle={
              <View style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
                <Text style={{fontWeight:'bold', color:'red'}}>$8.99</Text>
              </View>
            }
            avatar={require('./assets/2.jpg')}
            avatarStyle={{width: 150, height: 100}}
          />
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent:'flex-start',padding:2}}>
            <Icon
              type='evilicon'
              size={15}
              color='#389b11'
              name='check' />
              <Text style={{color: '#389b11', fontWeight: "500", fontSize: 10}}>Available at the nearest machine</Text>
            </View>
            <View style={{backgroundColor: '#ffac42', height: 1}}>
            </View>
          <ListItem
            roundAvatar
            title='Chloraseptic Max Sore Throat Lozenges Wild Berries'
            titleNumberOfLines={2}
            titleStyle={{fontSize: 12}}
            avatarContainerStyle={{width: 150, height: 100}}
            subtitle={
              <View style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
                <Text style={{fontWeight:'bold', color:'red'}}>$4.39</Text>
              </View>
            }
            avatar={require('./assets/3.jpg')}
            avatarStyle={{width: 150, height: 100}}
          />
          </View>
          <View>
            <View style={{flexDirection: 'row', justifyContent:'flex-start',padding:2}}>
            <Icon
              type='entypo'
              size={12}
              color='grey'
              name='circle-with-cross' />
              <Text style={{color: 'grey', fontWeight: "500", fontSize: 10}}>Unavailable at the nearest machine</Text>
            </View>
            <View style={{backgroundColor: '#ffac42', height: 1}}>
            </View>
          <ListItem
            roundAvatar
            title='CVS Sore Throat Lozenges for running nose, flu and cold'
            titleNumberOfLines={2}
            titleStyle={{fontSize: 12}}
            avatarContainerStyle={{width: 150, height: 100}}
            subtitle={
              <View style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
                <Text style={{fontWeight:'bold', color:'red'}}>$4.69</Text>
              </View>
            }
            avatar={require('./assets/4.jpg')}
            avatarStyle={{width: 150, height: 100}}
          />
          </View>
        </List>
      <View style={{height: 200}}>
      </View>
      </ScrollView>
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
    justifyContent: 'space-around',
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
        shadowOffset: { height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',  
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  titleBarInfoContainer: {
    
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 5,
  }
});