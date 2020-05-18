import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
  return(
      <View style = {styles.header}> 
            <Image 
            source = {require('../images/food.jpg')}
            style = {styles.food} 
            />
            <Text style = {styles.logo}>FAST food</Text>
      </View>
    
    );
  }
}


const styles = StyleSheet.create({
    header: {
        height : 80,
        marginTop : 20,
        backgroundColor : '#fff',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    food: {
        width: 40,
        height: 20
    },
    logo: {
        fontSize: 30,
        color: 'blue'
    }

});