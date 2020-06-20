import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
    return (
        <View style = {styles.screen}>
        <View style = {styles.cartItem}>
            <Text style = {styles.itemData}>
                <Text style = {styles.quantity}>{props.quantity} </Text> 
                <Text style = {styles.title}>{props.title}</Text>
            </Text>
            <View style = {styles.itemData}>
                <Text style = {styles.amount}>${props.amount.toFixed(2)}    </Text>
                {props.deletable && <TouchableOpacity onPress = {props.onRemove} style = {styles.trashButton}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size = {23}
                        colour = "red"
                    />
                </TouchableOpacity>}
            </View>
        </View>
        <View style = {styles.prefScreen}>
    <Text styles = {styles.preference}>{props.preference}</Text>
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        backgroundColor : 'white',
        marginBottom: 20,
        borderRadius: 5
    },
    cartItem : {
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : 20,
    },
    itemData : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    quantity : {
        fontSize : 16
    },
    title : {
        fontSize : 16
    },
    amount : {
        fontSize : 16
    },
    trashButton : {

    },
    preference : {
        fontSize : 26,
        textAlign : 'center'
    },
    prefScreen : {
        marginHorizontal : 30,
        justifyContent : 'space-between',
        paddingBottom: 10,
        
    }
});

export default CartItem;