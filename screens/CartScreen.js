import React from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../app/components/CartItem';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartMeals = useSelector(state => {
        const transformedCartMeals = [];
        for (const key in state.cart.meals) {
            transformedCartMeals.push({
                mealId: key,
                mealTitle: state.cart.meals[key].mealTitle,
                mealPrice: state.cart.meals[key].mealPrice,
                mealQuantity: state.cart.meals[key].quantity,
                mealPreference: state.cart.meals[key].mealPreference,
                sum: state.cart.meals[key].sum,
                stallId: state.cart.meals[key].stallId
            })
        }
        return transformedCartMeals.sort((a, b) => a.mealId > b.mealId ? 1 : -1) 
    });

    const dispatch = useDispatch();

    return <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>
                Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
            </Text>
            <Button
                title="Order Now!"
                disabled = {cartMeals.length === 0}
                onPress = {() => {
                    dispatch(ordersActions.addOrder(cartMeals, cartTotalAmount));
                }}
            />
        </View>
        <FlatList
            data={cartMeals}
            keyExtractor={item => item.mealId}
            renderItem={itemData => (
                <CartItem
                    quantity={itemData.item.mealQuantity}
                    title={itemData.item.mealTitle}
                    amount={itemData.item.sum}
                    preference={itemData.item.mealPreference}
                    deletable = {true}
                    onRemove={() => {
                        dispatch(cartActions.removeFromCart(itemData.item.mealId));
                    }}
                />)}
        />
    </View>
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontSize: 18
    },
    amount: {
        color: 'pink'
    }
});

export default CartScreen;