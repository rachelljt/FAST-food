import React from 'react';
import { View, StyleSheet, Button, useState, Text} from 'react-native';

import LoginScreen from './LoginScreen'; 

const LoginPage = props => {
    const [isLoginPage, setIsLoginPage] = React.useState(true);
    if (isLoginPage) {
    return (
        <View style = {styles.screen}>
            <Text style = {styles.myText}>Welcome to            FAST food!</Text>
            <View style = {styles.button}>
            <Button title = "Seller"  color = '#A723AB'  onPress ={()=>setIsLoginPage(false)} />
            </View>
            <View style = {styles.button}>
            <Button title = "Buyer" color = '#A723AB'  onPress ={()=>setIsLoginPage(false)} />
            </View>
        </View>
    ); 
        } else {
            return (
            <LoginScreen LoginPage = {setIsLoginPage}/>
            );
        }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    button: {
        borderWidth: 2,
        padding: 5,
        marginBottom: 10,
        width: '80%'
    },
    myText: {
        fontFamily: "Marker Felt",
        fontStyle: "italic",
        fontSize: 40,
        margin: 10,
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        marginBottom: 10,
        textAlign:'center'
      }
});

export default LoginPage;