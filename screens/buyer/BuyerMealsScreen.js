import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Platform,
  ActivityIndicator,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { STALLS, MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";
import HeaderButton from "../../components/HeaderButton";
import * as mealsActions from "../../store/actions/meals";
import Colors from "../../constants/colors";

const BuyerMealsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const stallId = props.navigation.getParam("stallID");

  const displayedMeals = useSelector((state) =>
    state.meals.meals.filter((meal) => meal.stallId === stallId)
  );

  const dispatch = useDispatch();

  const loadItems = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);

    try {
      await dispatch(mealsActions.fetchItems());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener("willFocus", loadItems);

    return () => {
      willFocusSub.remove();
    };
  }, [loadItems]);

  useEffect(() => {
    setIsLoading(true);
    loadItems().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadItems]);

  const toPrefScreen = (id) => {
    props.navigation.navigate({
      routeName: "BuyerMealPreference",
      params: {
        mealId: id,
      },
    });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text> An error occurred </Text>
        <Button title="Try again" onPress={loadItems} color={Colors.primary} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && displayedMeals.length === 0) {
    return (
      <View style={styles.centered}>
        <Text> No items found. </Text>
      </View>
    );
  }

  const renderMealItem = (itemData) => {
    const toPrefScreen = (id) => {
      props.navigation.navigate({
        routeName: "BuyerMealPreference",
        params: {
          mealId: itemData.item.id,
        },
      });
    };

    return (
      <View style={styles.mealsContainer}>
        <MealItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.image}
          onSelect={toPrefScreen}
        >
          <Button title="Add to Cart" onPress={toPrefScreen} />
        </MealItem>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        onRefresh={loadItems}
        refreshing={isRefreshing}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

BuyerMealsScreen.navigationOptions = (navigationData) => {
  const stallId = navigationData.navigation.getParam("stallID");
  const selectedStall = STALLS.find((s) => s.id === stallId);
  return {
    headerTitle: selectedStall.title,
    headerRight: () => (
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
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  // mealsContainer: {
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   borderWidth: 2,
  //   //borderColor: Colors.primary,
  //   marginHorizontal: 20,
  //   marginVertical: 20,
  // },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BuyerMealsScreen;
