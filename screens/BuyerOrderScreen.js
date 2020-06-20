import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../app/components/HeaderButton';
import OrderItem from '../app/components/OrderItem';

const BuyerOrderScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    orders.sort((a, b) => a.id > b.id ? -1 : 1)

    return <FlatList
            data={orders}
            keyExtractor= {item => item.id}
            renderItem = {itemData => <OrderItem 
                                amount = {itemData.item.totalAmount} 
                                date = {itemData.item.readableDate}
                                items = {itemData.item.items}
                                />}
            />
};

BuyerOrderScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }} />
          </HeaderButtons>
          )
    };
};

export default BuyerOrderScreen;