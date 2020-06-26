import React from "react";
import { FlatList, Button, View, Platform, StyleSheet } from "react-native";
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

  return (
    //<View>
    <FlatList
      data={sellerItems}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <MealItem
          image={itemData.item.image}
          title={itemData.item.title}
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
              color="white"
            />
            <Button
              title="Delete"
              onPress={() => {
                dispatch(mealsAction.deleteItem(itemData.item.id));
              }}
              color="white"
            />
          </View>
        </MealItem>
      )}
    />
    //</View>
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
    headerRight: (
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default SellerMenuScreen;
