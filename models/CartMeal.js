class CartMeal {
    constructor(quantity, mealPrice, mealTitle, mealPreference, sum, stallId ) {
        this.quantity = quantity;
        this.mealPrice = mealPrice;
        this.mealTitle = mealTitle;
        this.mealPreference = mealPreference;
        this.sum = sum;
        this.stallId = stallId;
    }
}

export default CartMeal;