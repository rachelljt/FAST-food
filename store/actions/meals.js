export const DELETE_ITEM = "DELETE_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId };
};

export const createItem = (title, price, imageUrl) => {
  return {
    type: CREATE_ITEM,
    itemData: {
      title,
      price,
      imageUrl,
    },
  };
};

export const updateItem = (id, title, price, imageUrl) => {
  return {
    type: UPDATE_ITEM,
    itemId: id,
    itemData: {
      title,
      price,
      imageUrl,
    },
  };
};
