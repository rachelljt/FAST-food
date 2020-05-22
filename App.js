import React from 'react';
import { StyleSheet, ScrollView, Text, Button} from 'react-native';

import Header from './app/components/Header';
import LoginPage from './screens/LoginPage';

export default function App() {
    return (
    <ScrollView style={styles.container}>
      <Header title = "Fast Food"/>
      <LoginPage/>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },

  
});
