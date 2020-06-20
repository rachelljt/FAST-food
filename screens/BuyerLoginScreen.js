import React from 'react';
import { StyleSheet, Text, View, TextInput, useState, Button, Alert } from 'react-native';

import Header from '../app/components/Header';

const BuyerLoginScreen = props => {
  const [Username, onChangeUsername] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  const inputHandler = () => {
    if (Username === '' || Password === '') {
      Alert.alert('Please enter Username/Password');
    } else {
      props.navigation.replace({
        routeName: 'BuyerMain',
        params: {
          userID: Username
        }
      });
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.myText}>Welcome to          FAST food!</Text>
      <View style={styles.input}>
        <TextInput style={styles.myOtherText}
          placeholder="Username"
          onChangeText={text => onChangeUsername(text)}
          autoCorrect={false}
        >
        </TextInput>
        <TextInput style={styles.myOtherText}
          placeholder="Password"
          onChangeText={text => onChangePassword(text)}
          secureTextEntry={true} >
        </TextInput>
        <View style={styles.button1}>
          <View style={styles.button2}>
            <Button title="Back" color='black' onPress={() => {
              props.navigation.goBack();
            }} />
          </View>
          <View style={styles.button2}>
            <Button title='Login' color='black' onPress={inputHandler} />
          </View>
        </View>
      </View>
    </View>);
}

BuyerLoginScreen.navigationOptions = {
  headerTitle: '',
  headerBackground: () => (<Header />),
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 20,

  },
  myText: {
    fontFamily: "avocado-creamy",
    fontSize: 50,
    padding: 10,
    textAlign: 'center'
  },

  myOtherText: {
    fontFamily: 'Arial',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    color: 'black'
  },
  input: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  button1: {
    flexDirection: 'row',
  },
  button2: {
    marginHorizontal: 40,
    borderWidth: 2,
    borderColor: '#f7287b',
    backgroundColor: '#f7287b'
  }
});

export default BuyerLoginScreen;