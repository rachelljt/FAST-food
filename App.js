import React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button} from 'react-native';

import Header from './app/components/Header';

export default class App extends React.Component {
  render() {
    return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style = {styles.myText}>Welcome to our app!</Text>
      <TextInput style = {styles.myText}>Orders</TextInput>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 40,
    marginBottom: 50
    
  },
  myText: {
    marginTop: 10,
    fontFamily: "Marker Felt",
    fontStyle: "italic",
    fontSize: 40    
  },
  
});
