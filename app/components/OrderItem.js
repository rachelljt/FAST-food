import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import CartItem from './CartItem';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style = {styles.screen}>
            <View style = {styles.summary}>
                <Text style = {styles.totalAmt}>${props.amount.toFixed(2)}</Text>
                <Text style = {styles.date}>{props.date}</Text>
            </View>
            <Button 
                title = {showDetails ? 'Hide Details' : 'Show Details'} 
                color = 'white'
                onPress = {() => {
                    setShowDetails(prevState => !prevState)
                }}
            />
            {showDetails && <View style = {styles.detailItems}>
                {props.items.map(cartItem => 
                        <CartItem 
                            key = {cartItem.mealId}
                            quantity = {cartItem.mealQuantity} 
                            title = {cartItem.mealTitle}
                            amount = {cartItem.sum}
                            preference = {cartItem.mealPreference}
                            deletable = {false}
                        />)}
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'pink',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmt: {
        fontSize: 16
    },
    date: {
        fontSize: 16,
    },
    detailItems: {
        width: '100%'
    }

});

export default OrderItem;