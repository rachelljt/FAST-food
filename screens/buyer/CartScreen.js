import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/CartItem";
import * as cartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/orders";
import Colors from "../../constants/colors";

const CartScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartMeals = useSelector((state) => {
    const transformedCartMeals = [];
    for (const key in state.cart.meals) {
      transformedCartMeals.push({
        mealId: key,
        mealTitle: state.cart.meals[key].mealTitle,
        mealPrice: state.cart.meals[key].mealPrice,
        mealQuantity: state.cart.meals[key].quantity,
        mealPreference: state.cart.meals[key].mealPreference,
        sum: state.cart.meals[key].sum,
        stallId: state.cart.meals[key].stallId,
      });
    }
    return transformedCartMeals.sort((a, b) => (a.mealId > b.mealId ? 1 : -1));
  });

  const dispatch = useDispatch();

  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(ordersActions.addOrder(cartMeals, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.mainScreen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${(Math.round(cartTotalAmount.toFixed(2) * 100) / 100).toFixed(2)}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Button
            title="Order Now!"
            disabled={cartMeals.length === 0}
            onPress={sendOrderHandler}
          />
        )}
      </View>
      <View style={styles.ordersScreen}>
        <FlatList
          data={cartMeals}
          keyExtractor={(item) => item.mealId}
          renderItem={(itemData) => (
            <CartItem
              quantity={itemData.item.mealQuantity}
              title={itemData.item.mealTitle}
              amount={itemData.item.sum}
              preference={itemData.item.mealPreference}
              deletable={true}
              onRemove={() => {
                dispatch(cartActions.removeFromCart(itemData.item.mealId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    //margin: 20,
    flex: 1,
    backgroundColor: "white",
  },
  ordersScreen: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    flex: 1,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 30,
    marginBottom: 15,
    height: 60,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
