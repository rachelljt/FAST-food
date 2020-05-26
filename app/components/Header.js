import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = props => {
    return(
        <View style = {styles.header}> 
            <Image 
            source = {require('../images/foodclique.jpg')}
            style = {styles.food} 
            />
            <Text style = {styles.logo}>Fast Food</Text>
      </View>
    );
};




const styles = StyleSheet.create({
    header: {
        height : 100,
        backgroundColor : '#f7287b',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    food: {
        width: 70,
        height: 40,
        marginRight: 10,
        marginTop: 20
    },
    logo: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Marker Felt',
        paddingTop: 20
    }

});

export default Header;