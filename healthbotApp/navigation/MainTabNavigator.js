import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import ProductChains from '../screens/ProductChain';
import OrderDone from '../screens/CartScreen';
import MapPush from '../screens/MapPush';
import HistoryScreen from '../screens/HistoryScreen';

export default TabNavigator(
  {
    Shop: {
      screen: ProductChains,
    },
    Carts: {
      screen: OrderDone,
    },
    Map: {
      screen: MapPush,
    },
    Order: {
      screen: HistoryScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Shop':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Carts':
            iconName = Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart';
            break;
          case 'Map':
            iconName = Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map';
              break;
          case 'Order':
            iconName =
              Platform.OS === 'ios' ? `ios-list-box${focused ? '' : '-outline'}` : 'md-list-box'; 
        }
        return (
          <Ionicons
            name={iconName}
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
