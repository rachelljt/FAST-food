import React from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const LoginPage = (props) => {
  return (
    <View style={styles.screen}>
      {/* <Text style={styles.text} numberOfLines={2}>
        FAST-food
      </Text> */}
      <Image
        source={require("../assets/images/logo2.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/images/cross.jpg")}
        style={styles.cross}
      />
      <Image
        source={require("../assets/images/foodclique.jpg")}
        style={styles.appLogo}
      />
      <View style={styles.sellerButton}>
        <Button
          title="Seller"
          color="black"
          onPress={() => {
            props.navigation.navigate({ routeName: "SellerLogin" });
          }}
        />
      </View>
      <View style={styles.buyerButton}>
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

LoginPage.navigationOptions = {
  headerTitle: "",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
    backgroundColor: "white",
  },
  logoContainer: {
    // flex: 1,
    // marginTop: 10,
  },
  appLogo: {
    width: "70%",
    height: "15%",
    resizeMode: "stretch",
    marginBottom: 30,
  },
  logo: {
    width: "80%",
    height: "38%",
    resizeMode: "stretch",
  },
  cross: {
    width: "10%",
    height: "5%",
    resizeMode: "stretch",
    marginTop: 5,
  },
  text: {
    fontFamily: "avocado-creamy",
    fontStyle: "italic",
    fontSize: 50,
    textAlign: "center",
    width: "60%",
  },
  sellerButton: {
    width: "70%",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: Colors.accent,
  },
  buyerButton: {
    width: "70%",
    borderRadius: 10,

    backgroundColor: Colors.primary,
  },
});

export default LoginPage;
