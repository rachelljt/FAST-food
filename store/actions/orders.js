export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (mealItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: mealItems, amount: totalAmount },
  };
};
