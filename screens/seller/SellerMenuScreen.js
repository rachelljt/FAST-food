import React from "react";
import {
  FlatList,
  Button,
  View,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealItem from "../../components/MealItem";
import Header from "../../components/Header";
import HeaderButton from "../../components/HeaderButton";
import * as mealsAction from "../../store/actions/meals";

const SellerMenuScreen = (props) => {
  const sellerItems = useSelector((state) => state.meals.stallItems);
  const dispatch = useDispatch();

  const editItemHandler = (id) => {
    props.navigation.navigate("EditItem", { itemId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Confirmation", "Are you sure you want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(mealsAction.deleteItem(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={sellerItems}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <MealItem
          title={itemData.item.title}
          image={itemData.item.image}
          price={itemData.item.price}
          onSelect={() => {
            editItemHandler(itemData.item.id);
          }}
        >
          <View style={styles.buttonContainer}>
            <Button
              title="Edit"
              onPress={() => {
                editItemHandler(itemData.item.id);
              }}
            />
            <Button
              title="Delete"
              onPress={deleteHandler.bind(this, itemData.item.id)}
            />
          </View>
        </MealItem>
      )}
      ListFooterComponent={
        <Button
          style={styles.button}
          title="Logout"
          onPress={() => props.navigation.goBack()}
        />
      }
    />
  );
};

SellerMenuScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "stall name",
    headerBackground: () => <Header />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navigationData.navigation.navigate("EditItem");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    padding: 10,
  },
});

export default SellerMenuScreen;
