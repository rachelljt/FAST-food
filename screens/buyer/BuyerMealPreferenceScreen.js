import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput, Alert } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/colors";

const BuyerMealPreferenceScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  //const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const selectedMeal = useSelector((state) => {
    const meal = state.meals.meals.filter((meal) => meal.id === mealId)[0];
    return meal;
  });

  const [quantity, setQuantity] = useState(1);

  const [preferences, setPreferences] = useState("");

  const dispatch = useDispatch();

  const increButton = () => {
    setQuantity(quantity + 1);
  };

  const decreButton = () => {
    if (quantity <= 1) {
      Alert.alert("Please input quantity!");
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(selectedMeal, preferences, quantity));
    Alert.alert("Added to Cart!");
    props.navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.titleName}>{selectedMeal.title}</Text>
      <View style={styles.inputqty}>
        <Text style={styles.title}>Quantity</Text>
        <Text style={styles.title}>{quantity}</Text>
        <View style={styles.buttons}>
          <Button title="-" onPress={decreButton} />
          <Button title="+" onPress={increButton} />
        </View>
      </View>
      <View>
        <TextInput
          style={styles.pref}
          placeholder="Preferences"
          keyboardType="default"
          onChangeText={(text) => setPreferences(text)}
        />
      </View>
      <Button title="Add to Cart" onPress={addToCartHandler} />
    </View>
  );
};

BuyerMealPreferenceScreen.navigationOptions = {
  headerTitle: "Preferences",
  headerTintColor: "black",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  titleName: {
    fontFamily: "opensans-bold",
    marginTop: 10,
    fontSize: 20,
    color: Colors.primary,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  inputqty: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 15,
    marginVertical: 20,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },

  pref: {
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 30,
    width: 300,
    maxWidth: "80%",
    borderColor: Colors.primary,
  },
});

export default BuyerMealPreferenceScreen;
