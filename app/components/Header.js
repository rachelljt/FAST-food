import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = props => {
    return(
        <View style = {styles.header}> 
            <Image 
            source = {require('../images/foodclique.jpg')}
            style = {styles.food} 
            />
            <Text style = {styles.logo}>{props.title}</Text>
      </View>
    );
};




const styles = StyleSheet.create({
    header: {
        height : 80,
        marginTop: 50,
        backgroundColor : '#f7287b',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    food: {
        width: 70,
        height: 60,
        marginRight: 10,
    },
    logo: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Marker Felt'
    }

});

export default Header;