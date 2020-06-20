export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (meal, pref, qty) => {
    return { type: ADD_TO_CART, meal: meal, pref: pref, qty: qty };
};

export const removeFromCart = mealId => {
    return { type: REMOVE_FROM_CART, mealId: mealId };
};