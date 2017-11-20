import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handleGo}>HomeScreen!</Text>
        
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
      </View>
    )
  }

  _handleGo = () => {
    this.props.navigation.navigate('Screen_B');
  }
}

class ScreenB extends React.Component {
  /* static navigationOptions = {
    title: 'ScreenB'
  }; */

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handleGo}>AnotherScreen!</Text>
        
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
      </View>
    )
  }

  _handleGo = () => {
    this.props.navigation.navigate('Screen_C');
  }
}

  class ScreenC extends React.Component {
    /* static navigationOptions = {
      title: 'ScreenC'
    }; */

    static navigationOptions = {
      header: null,
    };
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text onPress={this._handleGo}>Go to Home!</Text>
          
          <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
        </View>
      )
    }
  
    _handleGo = () => {
      this.props.navigation.navigate('Home');
    }
  

  
}


const Chains = StackNavigator({
  Homex: {
    screen: HomeScreen,
  },
  Screen_B: {
    screen: ScreenB,
  },
  Screen_C: {
    screen: ScreenC,
  },
});

export default Chains
/*
export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    Another: { screen: AnotherScreen },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
 
        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
 
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
 
        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
 );

 
*/







/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  Alert, Button, NavigatorIOS, Text, View,StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    )
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    //nextIndex = 
    //  nextIndex === 5 ? 1 : nextIndex;
    this.props.navigator.push({
      component: MyScene2,
      title: 'Scene 2' + nextIndex,
      passProps: {index: nextIndex}
    });
  }

  _onBack() {
    //Alert.alert('Purchase Success!');
    this.props.navigator.popToTop();
  }
    
  

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.title }</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
        <Button
          onPress={this._onBack}
          title="Tap me to go back"
        />
        <Button
          onPress={() => { Alert.alert('Purchase Success!')}}
          title="Check out"
        />
      </View>
    )
  }
}

class MyScene2 extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    //nextIndex = 
    //  nextIndex === 5 ? 1 : nextIndex;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene 1' + nextIndex,
      passProps: {index: nextIndex}
    });
  }

  _onBack() {
    //Alert.alert('Purchase Success!');
    this.props.navigator.popToTop();
  }
    
  

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.title }</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene 2 "
        />
        <Button
          onPress={this._onBack}
          title="Tap me to go back 2 "
        />
        <Button
          onPress={() => { Alert.alert('Purchase Success!')}}
          title="Check out"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#dd4c46',
  },
});

*/
