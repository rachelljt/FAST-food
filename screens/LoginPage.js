import React from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const LoginPage = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text} numberOfLines={2}>
        FAST-food
      </Text>
      <Image
        source={require("../assets/images/foodclique.jpg")}
        style={styles.appLogo}
      />
      <View style={styles.button}>
        <Button
          title="Seller"
          color="black"
          onPress={() => {
            props.navigation.navigate({ routeName: "SellerLogin" });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Buyer"
          color="black"
          onPress={() => {
            props.navigation.navigate({ routeName: "BuyerLogin" });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  appLogo: {
    width: "70%",
    height: "15%",
    resizeMode: "stretch",
  },
  text: {
    fontFamily: "avocado-creamy",
    fontStyle: "italic",
    fontSize: 50,
    textAlign: "center",
    width: "60%",
  },
  button: {
    width: "60%",
    margin: 10,
    backgroundColor: Colors.accent,
  },
});

export default LoginPage;
