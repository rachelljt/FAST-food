import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

const CartHeaderButton = props => {
    return (<HeaderButton 
                {...props} 
                IconComponent = {Ionicons}
                iconSize = {25} 
                color = {'black'} />);
};

export default CartHeaderButton;