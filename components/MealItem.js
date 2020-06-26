import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MealItem = (props) => {
  const id = props.id;
  // return (
  // <View style = {styles.screen}>
  //    <View style = { styles.mealsHeader }>
  //     <View style = {styles.mealsDetails}>
  //        <Text style = {{width : '60%'}}>{props.title}</Text>
  //        <Text>${props.price.toFixed(2)}</Text>
  //        <Button
  //         title = 'Add to cart'
  //         onPress = {props.onSelect}/>
  //        </View>
  //        <ImageBackground style = {styles.background} source = {{uri: props.image}}/>
  //     </View>
  // </View>
  // );
  return (
    <View style={styles.screen}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.mealsHeader}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.button}>
        {props.children}
        {/* <Button title="Add to Cart" onPress={props.onSelect} color="purple" /> */}
      </View>
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
    backgroundColor: "pink",
    margin: 20,
    height: 300,
    padding: 20,
  },
  mealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    height: "25%",
  },
  image: {
    width: "100%",
    height: "70%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "sky-blue",
    width: "80%",
  },
  price: {
    fontSize: 16,
    color: "#888",
    fontFamily: "sky-blue",
  },
  button: {
    height: "10%",
  },
});

export default MealItem;
