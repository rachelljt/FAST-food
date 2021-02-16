import React, { useState } from "react";
import { useScreens, enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import mealsReducer from "./store/reducers/meals";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import authReducer from "./store/reducers/auth";
// import { composeWithDevTools } from 'react-devtools-extension';

const rootReducer = combineReducers({
  meals: mealsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "chicken-pie": require("./assets/fonts/CHICKEN-Pie.ttf"),
    "avocado-creamy": require("./assets/fonts/Avocado-Creamy.ttf"),
    "sky-blue": require("./assets/fonts/SkyBlue.ttf"),
    "humble-boys": require("./assets/fonts/Humble-Boys.otf"),

    "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "opensans-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "opensans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
