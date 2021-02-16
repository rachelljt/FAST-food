import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";

const MealItem = (props) => {
  const id = props.id;

  return (
    <View style={styles.screen}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.mealsHeader}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
        <View style={styles.priceValue}>
          <Text style={styles.price}>${props.price /*.toFixed(2)*/}</Text>
        </View>
      </View>
      <View style={styles.button}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    //backgroundColor: Colors.primary,
    //marginHorizontal: 20,

    margin: 20,
    height: 300,
    padding: 20,
  },
  mealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
    //height: "25%",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "stretch",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "opensans-bold",
    width: "80%",
    color: Colors.primary,
  },
  price: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: "opensans-bold",
  },
  priceValue: {
    marginRight: 160,
  },
  button: {
    color: "white",
  },
});
// const styles = StyleSheet.create({
//   screen: {
//     shadowColor: "black",
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     //backgroundColor: Colors.primary,

//     height: 300,
//     width: 150,
//     //padding: 20,
//   },
//   mealsHeader: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   imageContainer: {
//     flex: 1,
//     //width: "100%",
//     backgroundColor: Colors.accent,
//     marginHorizontal: 10,
//     marginTop: 30,
//     //padding: 10,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "stretch",
//   },
//   title: {
//     fontSize: 18,
//     //marginVertical: 4,
//     fontFamily: "opensans-regular",
//   },
//   price: {
//     marginRight: 45,
//     fontSize: 18,
//     textAlign: "left",
//     color: "black",
//     fontFamily: "opensans-regular",
//   },
//   priceTitleContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   button: {
//     height: "10%",
//   },
// });

export default MealItem;
