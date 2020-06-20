import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'


import LoginPage from '../screens/LoginPage';
import BuyerLoginScreen from '../screens/BuyerLoginScreen';
import SellerLoginScreen from '../screens/SellerLoginScreen';
import BuyerMainScreen from '../screens/BuyerMainScreen';
import BuyerMealsScreen from '../screens/BuyerMealsScreen'
import BuyerMealPreferenceScreen from '../screens/BuyerMealPreferenceScreen';
import CartScreen from '../screens/CartScreen';
import BuyerOrderScreen from '../screens/BuyerOrderScreen'
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const MainNavigator = createStackNavigator(
    {
        Login: LoginPage,
        BuyerLogin: BuyerLoginScreen,
        SellerLogin: SellerLoginScreen,
        BuyerMain: BuyerMainScreen,
        BuyerMeals: BuyerMealsScreen,
        BuyerMealPreference: BuyerMealPreferenceScreen,
        Cart: CartScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
               <Ionicons 
                   name = {Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                   size = {23}
                   color = {drawerConfig.tintColor}
               />)
       }
    });

const OrdersNavigator = createStackNavigator(
    {
        Orders: BuyerOrderScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                    size={23}
                    color={drawerConfig.tintColor}
                />)
        }
    });

const AppNavigator = createDrawerNavigator({
    Main: MainNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions: {
        activeTintColor: 'pink'
    }
});


export default createAppContainer(AppNavigator);


