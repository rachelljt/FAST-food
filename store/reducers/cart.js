import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartMeal from '../../models/CartMeal';
import { ADD_ORDER } from "../actions/orders";

const initialState = {
    meals: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedMeal = action.meal;
            const mealPrice = addedMeal.price;
            const mealTitle = addedMeal.title;
            const mealPref = action.pref;
            const mealQty = action.qty;
            const stallId = addedMeal.stallId;
            const sum = mealPrice * mealQty;

            const newCartMeal = new CartMeal(mealQty, mealPrice, mealTitle, mealPref, sum, stallId);
            return {
                ...state,
                meals: { ...state.meals, [addedMeal.id]: newCartMeal },
                totalAmount: state.totalAmount + sum
            };
        case REMOVE_FROM_CART:
            const selectedMealItem = state.meals[action.mealId];
            const currentQty = selectedMealItem.quantity;
            let updatedCartMeals;
            if (currentQty > 1) {
                    const updatedCartMeal = new CartMeal(
                     selectedMealItem.quantity  - 1,
                    selectedMealItem.mealPrice, 
                    selectedMealItem.mealTitle,
                    selectedMealItem.mealPreference,
                    selectedMealItem.sum - selectedMealItem.mealPrice,
                    selectedMealItem.stallId);
                    updatedCartMeals = { ...state.meals, [action.mealId]: updatedCartMeal }
            } else {
                updatedCartMeals = { ...state.meals };
                delete updatedCartMeals[action.mealId];
            }
            return {
                ...state,
                meals: updatedCartMeals,
                totalAmount: state.totalAmount - selectedMealItem.mealPrice,
            };
        case ADD_ORDER: 
            return initialState;
    }
    return state;
};