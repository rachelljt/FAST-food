import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginPage from '../screens/LoginPage';
import BuyerLoginScreen from '../screens/BuyerLoginScreen';
import SellerLoginScreen from '../screens/SellerLoginScreen';
import BuyerMainScreen from '../screens/BuyerMainScreen';
import BuyerMealsScreen from '../screens/BuyerMealsScreen'

const AppNavigator = createStackNavigator({
    Login : LoginPage,
    BuyerLogin : BuyerLoginScreen,
    SellerLogin : SellerLoginScreen,
    BuyerMain : BuyerMainScreen,
    BuyerMeals : BuyerMealsScreen
});

export default createAppContainer(AppNavigator);


