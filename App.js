import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';
import { useScreens, enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
// import { composeWithDevTools } from 'react-devtools-extension';

const rootReducer = combineReducers({
  meals: mealsReducer,
  cart : cartReducer,
  orders : ordersReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'chicken-pie': require('./assets/fonts/CHICKEN-Pie.ttf'),
    'avocado-creamy': require('./assets/fonts/Avocado-Creamy.ttf'),
    'sky-blue': require('./assets/fonts/SkyBlue.ttf'),
    'humble-boys': require('./assets/fonts/Humble-Boys.otf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />);
  }

  return (
    <Provider store = {store}><AppNavigator /></Provider>
  );
}



