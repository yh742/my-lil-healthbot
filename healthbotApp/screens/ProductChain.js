import React, { Component } from 'react';
import {
  View,
  //Button,
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
  Button, 
  List, 
  ListItem, 
  SearchBar,
  Header,
  Icon,
  PricingCard,
  Rating,
  Badge,
 } from 'react-native-elements';
import { Constants } from 'expo';
import { 
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Octicons from 'react-native-vector-icons/Octicons';

import {
    StackNavigator,
  } from 'react-navigation';
  


class CategoriesList extends Component {

    static navigationOptions = {
        header: null,
      };

    _handleGo = () => {
    this.props.navigation.navigate('ProList');
  }

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
        
        <ScrollView style={{backgroundColor: 'white'}}
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
                avatar={require('../assets/Tylenol.jpg')}
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
    

    _renderGoBackIcon = () => {
        return(
        <Icon
        
        name='chevron-left'
        //type='font-awesome'
        color='#fff'
        onPress={() => this.props.navigation.goBack(null)} />
        );
    
      }


    _renderCategoryList_1 = () => {
      return(
        <View style={styles.boxContainer}>
          <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
            <Image source={require('../assets/01.png')} />
            <Button
            raised
            backgroundColor='rgb(217,111,105)'
            icon={{name: 'touch-app'}}
            containerViewStyle={{width: 150, height: 45}}
            title='Cough & Flu' 
            onPress={this._handleGo}/>
          </View>
          <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
            <Image source={require('../assets/02.png')} />
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
            <Image source={require('../assets/03.png')} />
            <Button
            raised
            backgroundColor='rgb(104,159,152)'
            icon={{name: 'touch-app'}}
            containerViewStyle={{width: 150, height: 45}}
            title='Shaving' />
          </View>
          <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
            <Image source={require('../assets/04.png')} />
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
            <Image source={require('../assets/05.png')} />
            <Button
            raised
            backgroundColor='rgb(143,200,91)'
            icon={{name: 'touch-app'}}
            containerViewStyle={{width: 150, height: 45}}
            title='Laundry' />
          </View>
          <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
            <Image source={require('../assets/06.png')} />
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
  

  class ProductList extends Component {

    static navigationOptions = {
        header: null,
      };

      _handleGo = () => {
        this.props.navigation.navigate('ProPage');
      };

      _renderGoBackIcon = () => {
        return(
        <Icon
        
        name='chevron-left'
        //type='font-awesome'
        color='#fff'
        onPress={() => this.props.navigation.goBack(null)} />
        );
    
      }


    render() {
      return (
        <View>
          <View>
            <StatusBar barStyle = 'light-content'/>
            <Header
              leftComponent={this._renderGoBackIcon()}
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
                onPress={this._handleGo}
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
                avatar={require('../assets/1.jpeg')}
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
              avatar={require('../assets/2.jpg')}
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
              avatar={require('../assets/3.jpg')}
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
              avatar={require('../assets/4.jpg')}
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


  class ProductPage extends Component {

    static navigationOptions = {
        header: null,
      };

    constructor(props) {
      super(props);
      this.state = { text: '1' , clicked: false}
    }

    _handleGo = () => {
        this.props.navigation.navigate('OrderSu');
      };

      _renderGoBackIcon = () => {
        return(
        <Icon
        
        name='chevron-left'
        //type='font-awesome'
        color='#fff'
        onPress={() => this.props.navigation.goBack(null)} />
        );
    
      }

      _renderGoCart = () => {
        return(
        <Icon
        
        name='shopping-cart'
        //type='font-awesome'
        color='#fff'
        onPress={() => this.props.navigation.navigate('Cart')} />
        );
    
      }

  
    render() {
      return (
        <View>
          <View>
            <StatusBar barStyle = 'light-content'/>
            <Header
              leftComponent={this._renderGoBackIcon()}
              centerComponent={{ text: 'Products', style: { color: '#fff',fontSize:20 } }}
              rightComponent={this._renderGoCart()}
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
              source={require('../assets/11.jpg')}
              style={imageStyle}
              resizeMode="cover"
            />
            <Image
              source={require('../assets/12.jpg')}
              style={imageStyle}
              resizeMode="cover"
            />
            <Image
              source={require('../assets/13.jpg')}
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
        <View style={{position: 'absolute', height: 40, left: 0, top: Dimensions.get('window').height - 90, width: Dimensions.get('window').width, flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
          <View style={{backgroundColor:'white', width: Dimensions.get('window').width/2, height: 40}}>
            <Button
              raised
              onPress={this._handleGo}
              backgroundColor='#f93e3e'
              title='Buy Now' />
          </View>
          <View style={{backgroundColor:'white', width: Dimensions.get('window').width/2, height: 40}}>
            <Button
              raised
              onPress={()=>{this.setState({clicked: true})}}
              backgroundColor='#e0bc70'
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
          />
          </TouchableOpacity>
    
          </View>
    
        );
      }
    
    };



    const ProductChains = StackNavigator({
        Categories: {
          screen: CategoriesList,
        },
        ProList: {
          screen: ProductList,
        },
        ProPage: {
          screen: ProductPage,
        },
        OrderSu:{
            screen: OrderDone,
        },
      });
      
      export default ProductChains

  
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