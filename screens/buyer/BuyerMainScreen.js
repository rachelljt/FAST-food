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
import Colors from "../../constants/colors";

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
    <View style={styles.screen}>
      <View>
        <Text style={styles.title}>STALLS</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={STALLS}
        renderItem={renderGridItem}
        numColumns={1}
      />
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={() => props.navigation.goBack()} />
      </View>
    </View>
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
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "opensans-bold",
    textAlign: "center",
    color: Colors.primary,
  },
  logoutButton: {
    marginBottom: 20,
  },
});

export default BuyerMainScreen;
