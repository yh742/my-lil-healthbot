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
            centerComponent={{ text: 'Category List', style: { color: '#fff',fontSize:20 } }}
            //rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
            backgroundColor = "#dd4c46"
          />
          <SearchBar
                lightTheme
                placeholder='Type Here to search...'
                 />
        </View>
        <View>
          <View style={{ ...Platform.select({
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
          paddingVertical: 5}} />
          <Text style={{fontSize:12, color: 'grey'}}>Scroll to View Categories</Text>
        </View>
      
      <ScrollView 
      //style={styles.container} 
      //contentContainerStyle={styles.contentContainer}
      >
          <List>
            <ListItem
              roundAvatar
              title='Limited Offer!'
              avatarContainerStyle={{width: 150, height: 150}}
              subtitle={
                <View style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
                  <Rating showRating fractions={1} imageSize={20} startingValue={4.2}/>
                  <Text style={{paddingLeft: 10, color: 'grey'}}>20% off!</Text>
                </View>
              }
              avatar={require('./assets/Tylenol.jpg')}
              avatarStyle={{width: 150, height: 150}}
            />
          </List>
        {this._renderCategoryList_1()}
        {this._renderCategoryList_2()}
        {this._renderCategoryList_3()}
      <View style={{height: 200}}>
      </View>
      </ScrollView>
      </View>
    );
  }

  _renderCategoryList_1 = () => {
    return(
      <View style={styles.boxContainer}>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/01.png')} />
          <Button
          raised
          backgroundColor='rgb(217,111,105)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Cough & Flu' />
        </View>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/02.png')} />
          <Button
          raised
          backgroundColor='rgb(217,111,105)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Digestive Health' />
        </View>
    </View>
    );
  };

  _renderCategoryList_2 = () => {
    return(
      <View style={styles.boxContainer}>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/03.png')} />
          <Button
          raised
          backgroundColor='rgb(104,159,152)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Shaving' />
        </View>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/04.png')} />
          <Button
          raised
          backgroundColor='rgb(104,159,152)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Bath & Body' />
        </View>
    </View>
    );
  };

  _renderCategoryList_3 = () => {
    return(
      <View style={styles.boxContainer}>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/05.png')} />
          <Button
          raised
          backgroundColor='rgb(143,200,91)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Laundry' />
        </View>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <Image source={require('./assets/06.png')} />
          <Button
          raised
          backgroundColor='rgb(143,200,91)'
          icon={{name: 'touch-app'}}
          containerViewStyle={{width: 150, height: 45}}
          title='Household' />
        </View>
    </View>
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});