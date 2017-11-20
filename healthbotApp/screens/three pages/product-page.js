import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScollView,
  ScrollView,
  Text,
  Platform,
  Image,
  imageStyle,
  Picker,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import { 
  List, 
  ListItem, 
  SearchBar,
  Header,
  Icon,
  PricingCard,
  Rating,
  Badge,
 } from 'react-native-elements';
//import ActionBar from './assets/action-bar/ActionBar'
import { Constants } from 'expo';
import { 
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Octicons from 'react-native-vector-icons/Octicons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '1' , clicked: false}
  }

  render() {
    return (
      <View>
        <View>
          <StatusBar barStyle = 'light-content'/>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Products', style: { color: '#fff',fontSize:20 } }}
            rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
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
        <View>
          <View style={{...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { height: 0 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
            },
            android: {
              elevation: 20,
            },
          }),
          alignItems: 'flex-start',
          backgroundColor: '#fbfbfb',
          paddingVertical: 3}} />
          <Badge
          value={'Flu Season is here. Be careful.'}
          containerStyle={{ backgroundColor: '#f4b224'}}
          textStyle={{ color: 'white' }}
          />
        </View>
        <ScrollView pagingEnabled directionalLockEnabled horizontal>
          <Image
            source={require('./assets/11.jpg')}
            style={imageStyle}
            resizeMode="cover"
          />
          <Image
            source={require('./assets/12.jpg')}
            style={imageStyle}
            resizeMode="cover"
          />
          <Image
            source={require('./assets/13.jpg')}
            style={imageStyle}
            resizeMode="cover"
          />
        </ScrollView>
        <View style={{position: 'absolute', width: 23, height: 20, top: 6, left: 50, backgroundColor:'#f4b224'}}>
          <Octicons    
          size= {20}
          color='white'
          name='megaphone' />
        </View>
        <View style={{height: 130, margin: 5, backgroundColor: '#edeaef'}}>
          <Text style={{fontSize: 25, marginTop: 15, fontFamily: 'System'}}>  Tylenol Extra Strength</Text>
          <Text style={{fontSize: 20, marginTop: 5, fontFamily: 'System'}}>   500 mg, 100 ct</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', margin: 5, fontFamily: 'System'}}>$7.45</Text>
              <Text style={{textDecorationLine: 'line-through', color: 'grey', fontSize: 15, marginTop: 5, fontFamily: 'System'}}> $9.3 </Text>
              <Text style={{fontSize: 15, color: 'red', marginTop: 5, fontFamily: 'System'}}>(20% off)</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{alignItems: 'center', width: 25, height: 18, marginTop: 5, backgroundColor: 'gray' }}>
                <Text>-</Text>
            </TouchableOpacity>
            <TextInput
              style={{height: 18, width: 25, marginTop: 5, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TouchableOpacity style={{alignItems: 'center', width: 25, height: 18, marginTop: 5, backgroundColor: 'red' }}>
                <Text style={{color: 'white'}}>+</Text>
            </TouchableOpacity>
            </View>
          </View> 
        </View>
        <View>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold', margin: 10, fontFamily: 'System'}}> Description: </Text>
          <Text style={{color: 'grey', fontSize: 15, marginTop: 3, marginLeft: 8, fontFamily: 'System'}}>Relieves occasional minor irritation, pain, sore mouth</Text>
          <Text style={{color: 'grey', fontSize: 15, marginTop: 3, marginLeft: 8, fontFamily: 'System'}}>or sore throat.</Text>
          <Text style={{color: 'grey', fontSize: 15, marginTop: 3, marginLeft: 8, fontFamily: 'System'}}>Fast, soothing, temporary relief.</Text>      
          <Text style={{color: 'grey', fontSize: 15, marginTop: 3, marginLeft: 8, fontFamily: 'System'}}>Fast Acting Oral throat relief.</Text>
        </View>
        <View style={{height: 200}}>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', height: 40, left: 0, top: Dimensions.get('window').height - 40, width: Dimensions.get('window').width, flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
        <View style={{backgroundColor:'#f93e3e', width: Dimensions.get('window').width/2, height: 40}}>
          <Button
            onPress={()=>{this.setState({clicked: true})}}
            color='white'
            title='Buy Now' />
        </View>
        <View style={{backgroundColor:'#e0bc70', width: Dimensions.get('window').width/2, height: 40}}>
          <Button
            onPress={()=>{this.setState({clicked: true})}}
            color='white'
            title='Add to Cart' />
        </View>
      </View>
      </View>
    );
  }

  _renderPricingCard = () => {
    return(
      <View>
      <PricingCard
      color='#4f9deb'
      info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ title: 'Find More', icon: 'touch-app' }}
      containerStyle={{borderWidth: 'thin'}}
    />
    </View>
    );    
  };

  _renderCategoryList = () => {
    return(
      <View style={styles.boxContainer}>
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
        <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        size='70'            
        onPress={() => console.log('hello')} />
        <Button
        raised
        icon={{name: 'touch-app'}}
        containerViewStyle={{width: 150, height: 45}}
        title='Heart Care' />
      </View>
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
        <Icon
        raised
        name='ios-american-football'
        type='font-awesome'
        color='#f50'
        size='70'
        onPress={() => console.log('hello')} />
        <Button
        raised
        icon={{name: 'touch-app'}}
        containerViewStyle={{width: 150, height: 45}}
        title='Asthma' />
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
});