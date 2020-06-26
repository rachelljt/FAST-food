import { MEALS } from "../../data/dummy-data";
import { DELETE_ITEM } from "../actions/meals";

const initialState = {
  meals: MEALS,
  stallItems: MEALS.filter((item) => item.stallId === "s1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
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
