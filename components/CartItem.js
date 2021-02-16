import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

const CartItem = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.cartItem}>
        <View style={styles.itemData}>
          <Text style={styles.quantity}>{props.quantity} </Text>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.itemData}>
          <Text style={styles.amount}>${props.amount.toFixed(2)} </Text>
          {props.deletable && (
            <TouchableOpacity
              onPress={props.onRemove}
              style={styles.trashButton}
            >
              <Ionicons
                name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                size={23}
                colour="red"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.prefScreen}>
        <Text styles={styles.preference}>{props.preference}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  cartItem: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 17,
  },
  title: {
    fontSize: 17,
  },
  amount: {
    fontSize: 17,
  },
  trashButton: {},
  preference: {
    fontSize: 26,
    textAlign: "center",
  },
  prefScreen: {
    marginHorizontal: 30,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});

export default CartItem;
