import { MEALS } from "../../data/dummy-data";
import {
  DELETE_ITEM,
  CREATE_ITEM,
  UPDATE_ITEM,
  SET_ITEMS,
} from "../actions/meals";
import Meal from "../../models/Meals";

const initialState = {
  meals: MEALS,
  stallItems: MEALS.filter((item) => item.stallId === "s1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        meals: action.items,
        stallItems: action.items.filter((item) => item.stallId === "s1"),
      };

    case CREATE_ITEM:
      const newItem = new Meal(
        action.itemData.id,
        "s1",
        action.itemData.title,
        action.itemData.price,
        action.itemData.imageUrl
      );
      return {
        ...state,
        meals: state.meals.concat(newItem),
        stallItems: state.stallItems.concat(newItem),
      };

    case UPDATE_ITEM:
      const stallItemIndex = state.stallItems.findIndex(
        (item) => item.id === action.itemId
      );
      const updatedItem = new Meal(
        action.itemId,
        state.stallItems[stallItemIndex].stallId,
        action.itemData.title,
        action.itemData.price,
        action.itemData.imageUrl
      );
      const updatedStallItems = [...state.stallItems];
      updatedStallItems[stallItemIndex] = updatedItem;

      const mealsIndex = state.meals.findIndex(
        (item) => item.id === action.itemId
      );
      const updatedMealsItems = [...state.meals];
      updatedMealsItems[mealsIndex] = updatedItem;

      return {
        ...state,
        meals: updatedMealsItems,
        stallItems: updatedStallItems,
      };

    case DELETE_ITEM:
      return {
        ...state,
        stallItems: state.stallItems.filter(
          (item) => item.id !== action.itemId
        ),
        meals: state.meals.filter((item) => item.id !== action.itemId),
      };
  }
  return state;
};
