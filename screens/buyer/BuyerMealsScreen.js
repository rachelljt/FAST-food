import React from "react";
import { View, StyleSheet, Button, FlatList, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../../constants/colors";
import { useSelector, useDipsatch } from 'react-redux'; 

import { STALLS, MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";
import Meal from "../../models/Meals";
import HeaderButton from "../../components/HeaderButton";
import * as mealsActions from '../../store/actions/meals';

const BuyerMealsScreen = (props) => {
  const stallId = props.navigation.getParam("stallID");

  // const displayedMeals = MEALS.filter((meal) => meal.stallId === stallId);

  const displayedMeals = useSelector(state => state.meals.meals.filter((meal) => meal.stallId === stallId));

  const toPrefScreen = (id) => {
    props.navigation.navigate({
      routeName: "BuyerMealPreference",
      params: {
        mealId: id,
      },
    });
  };

  const renderMealItem = (itemData) => {
    const toPrefScreen = () => {
      props.navigation.navigate({
        routeName: "BuyerMealPreference",
        params: {
          mealId: itemData.item.id,
        },
      });
    };

    return (
      <MealItem
        title={itemData.item.title}
        price={itemData.item.price}
        image={itemData.item.image}
        onSelect={toPrefScreen}
      >
        <Button title="Add to Cart" onPress={toPrefScreen} color="white" />
      </MealItem>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

BuyerMealsScreen.navigationOptions = (navigationData) => {
  const stallId = navigationData.navigation.getParam("stallID");
  const selectedStall = STALLS.find((s) => s.id === stallId);
  return {
    headerTitle: selectedStall.title,
    headerTintColor: "pink",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navigationData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});

export default BuyerMealsScreen;
