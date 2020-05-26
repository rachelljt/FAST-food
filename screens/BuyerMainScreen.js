import React from 'react';
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';

import Header from '../app/components/Header';
import { STALLS } from '../data/dummy-data';
import StallGridTile from '../app/components/StallGridTile';


const BuyerMainScreen = props => {
  const userId =  props.navigation.getParam('userID');
  const renderGridItem = (itemData) => {
    return (
      <StallGridTile 
        title = {itemData.item.title} 
        onSelect = { () => {
          props.navigation.navigate({routeName : 'BuyerMeals', 
          params : {
            stallID : itemData.item.id
          } });
        }} />
    );
  };
    return (
        <ScrollView>
       <View style = {styles.screen}><Text style = {styles.myText}>{userId}</Text></View>
        <FlatList data = {STALLS} renderItem={renderGridItem} numColumns = {1}/>
        </ScrollView>
      
    );
}


BuyerMainScreen.navigationOptions = {
    headerTitle : '',
    headerBackground : () => (<Header/>),
    headerBackTitle: 'Logout',
    
  }

const styles = StyleSheet.create({
  screen : {
    alignItems: 'center',
  },
  myText : {
    fontSize : 20,
    textAlign : 'center',
    marginTop : 25,
    borderWidth: 2,
    borderColor : 'purple',
    width: '50%',
    fontFamily : 'humble-boys'
    
  }

});

export default BuyerMainScreen;