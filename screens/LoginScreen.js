import React from 'react';
import { StyleSheet, Text, View, TextInput, Modal, useState, Button} from 'react-native';


const LoginScreen = props => {
    const [isLoginMode, setIsLoginMode] = React.useState(true);
    return (
        <Modal visible = {isLoginMode} >
        <View style = {styles.screen}>
        <Text style = {styles.myText}>Welcome to       FAST food!</Text>
        <View style = {styles.input}>
            <TextInput style = {styles.myOtherText} placeholder = 'Username'></TextInput>
            <TextInput style = {styles.myOtherText} secureTextEntry={true} placeholder = 'Password'></TextInput>
            <Button title = 'Login' color ='#A723AB' onPress ={()=> setIsLoginMode(false)}/>
        </View>
        </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 30,
        backgroundColor: 'pink',

    },
    myText: {
        
        fontFamily: "Marker Felt",
        fontStyle: "italic",
        fontSize: 40,
        margin: 20,
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        marginBottom: 10,
        textAlign:'center'
      },
      myOtherText: {
        fontFamily: 'Arial',
        fontSize: 20,  
        borderWidth: 1,
        borderColor: 'white',
        width: '80%',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        color: 'black'
      },
      input: {
        flex :1,
        justifyContent: "center",
        padding: 10,
        width: '100%',
        alignItems: 'center',
      }
});

export default LoginScreen;