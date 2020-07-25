import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Header from "../../components/Header";
import { STALLS } from "../../data/dummy-data";
import StallGridTile from "../../components/StallGridTile";
import HeaderButton from "../../components/HeaderButton";

const BuyerMainScreen = (props) => {
  const userId = props.navigation.getParam("userID");
  const renderGridItem = (itemData) => {
    return (
      <StallGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "BuyerMeals",
            params: {
              stallID: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.screen}>
          <Text style={styles.myText}>{userId}</Text>
        </View>
      }
      data={STALLS}
      renderItem={renderGridItem}
      numColumns={1}
      ListFooterComponent={
        <Button title="Logout" onPress={() => props.navigation.goBack()} />
      }
    />
  );
};

BuyerMainScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "",
    headerBackground: () => <Header />,
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
  };
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  myText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 25,
    borderWidth: 2,
    borderColor: "purple",
    width: "50%",
    fontFamily: "humble-boys",
  },
});

export default BuyerMainScreen;
