import React from 'react';
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity} from 'react-native';

import { STALLS } from '../data/dummy-data';

const BuyerMealsScreen = props => {
     const stallId = props.navigation.getParam('stallID');
     const selectedStall = STALLS.find(s => s.id === stallId);
    return (
    <View style = {styles.screen}><Text>{selectedStall.title}</Text></View>
    );
};

BuyerMealsScreen.navigationOptions =  navigationData => {
    const stallId = navigationData.navigation.getParam('stallID');
    const selectedStall = STALLS.find(s => s.id === stallId);
    return { 
        headerTitle : selectedStall.title,
        headerTintColor : 'pink'
    };
};

const styles = StyleSheet.create({
    screen :{
        flex :1,
        padding : 20
    }
  
  });

  export default BuyerMealsScreen;