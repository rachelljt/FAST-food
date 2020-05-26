import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import Header from '../app/components/Header';

const LoginPage = props => {
    return (
        <View style = {styles.screen}>
            <Text style = {styles.myText} numberOfLines = {2}>Welcome to FAST food!</Text>
            <View style = {styles.button}>
            <Button title = "Seller"  color = 'black' onPress = { () => {
                props.navigation.navigate({routeName : 'SellerLogin'});
            }} />
            </View>
            <View style = {styles.button}>
            <Button title = "Buyer" color = 'black' onPress = { () => {
                props.navigation.navigate({routeName : 'BuyerLogin'});
            }} />
            </View>
        </View>
    ); 
}

LoginPage.navigationOptions = {
    headerTitle : '',
    headerBackground : () => (<Header/>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'pink'
    },
    button: {
        borderWidth: 2,
        padding: 5,
        marginBottom: 10,
        width: '80%',
        borderColor : '#DC9BE2',
        backgroundColor : '#DC9BE2'
    },
    myText: {
        fontFamily: 'avocado-creamy',
        fontStyle: "italic",
        fontSize: 50,
        margin: 10,
        padding: 10,
        marginBottom: 10,
        textAlign:'center',
        width: '60%'

      }
});

export default LoginPage;