import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput, Alert } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";

const BuyerMealPreferenceScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  //const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const selectedMeal = useSelector((state) =>
    state.meals.meals.filter((meal) => meal.mealId === mealId)
  );

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
      <Text style={styles.title}>{selectedMeal.title}</Text>
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
  headerTintColor: "pink",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
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
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },
  pref: {
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
  },
});

export default BuyerMealPreferenceScreen;
