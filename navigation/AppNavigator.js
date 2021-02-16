import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import LoginPage from "../screens/LoginPage";
import BuyerLoginScreen from "../screens/buyer/BuyerLoginScreen";
import BuyerMainScreen from "../screens/buyer/BuyerMainScreen";
import BuyerMealsScreen from "../screens/buyer/BuyerMealsScreen";
import BuyerMealPreferenceScreen from "../screens/buyer/BuyerMealPreferenceScreen";
import CartScreen from "../screens/buyer/CartScreen";
import BuyerOrderScreen from "../screens/buyer/BuyerOrderScreen";

import SellerLoginScreen from "../screens/seller/SellerLoginScreen";
import SellerMenuScreen from "../screens/seller/SellerMenuScreen";
import EditItemScreen from "../screens/seller/EditItemScreen";
import OrdersScreen from "../screens/seller/OrdersScreen";

import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors from "../constants/colors";

const BuyerMainNavigator = createStackNavigator(
  {
    Login: LoginPage,
    BuyerLogin: BuyerLoginScreen,
    BuyerMain: BuyerMainScreen,
    BuyerMeals: BuyerMealsScreen,
    BuyerMealPreference: BuyerMealPreferenceScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-home" : "ios-home"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: BuyerOrderScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const BuyerNavigator = createDrawerNavigator(
  {
    Stalls: BuyerMainNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

const SellerMainNavigator = createStackNavigator(
  {
    Login: LoginPage,
    SellerLogin: SellerLoginScreen,
    SellerMenu: SellerMenuScreen,
    EditItem: EditItemScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-home" : "ios-home"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const sellerOrdersNavigator = createStackNavigator(
  {
    sellerOrders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const SellerNavigator = createDrawerNavigator(
  {
    Menu: SellerMainNavigator,
    Orders: sellerOrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Buyer: BuyerNavigator,
    Seller: SellerNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(AppNavigator);
