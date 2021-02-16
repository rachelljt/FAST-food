import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={{ ...styles.header, ...props.style }}>
      {/* <Image
        source={require("../assets/images/foodclique.jpg")}
        style={styles.logo}
      /> */}
      <Text style={props.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 40,
    marginRight: 10,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: "white",
    fontFamily: "opensans-semibold",
    paddingTop: 20,
  },
});

export default Header;
