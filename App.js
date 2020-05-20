import React from 'react';
import { StyleSheet, ScrollView, Button, useState, ImagePropTypes } from 'react-native';

import Header from './app/components/Header';
import LoginScreen from './screens/LoginScreen';

export default function App() {

    return (
    <ScrollView style={styles.container}>
      <Header title = "Fast Food"/>
      <LoginScreen/>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
  
});
