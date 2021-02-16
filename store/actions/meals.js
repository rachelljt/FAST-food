// import Meal from "../../models/Meals";

// export const DELETE_ITEM = "DELETE_ITEM";
// export const CREATE_ITEM = "CREATE_ITEM";
// export const UPDATE_ITEM = "UPDATE_ITEM";
// export const SET_ITEMS = "SET_ITEMS";

// export const fetchItems = () => {
//   return async (dispatch, getState) => {
//     const userId = getState().auth.userId;
//     try {
//       const response = await fetch(
//         "https://fast-food-cdff5.firebaseio.com/items.json"
//       );

//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }

//       const resData = await response.json();
//       const loadedItems = [];

//       //console.log("Fetch data", resData);

//       for (const key in resData) {
//         loadedItems.push(
//           new Meal(
//             key,
//             resData[key].userId,
//             resData[key].title,
//             resData[key].price,
//             resData[key].imageUrl
//           )
//         );
//       }
//       console.log(
//         "loaded auth",
//         loadedItems.filter((prod) => prod.ownerId === userId)
//       );
//       dispatch({
//         type: SET_ITEMS,
//         items: loadedItems,
//         userItems: loadedItems.filter((prod) => prod.ownerId === userId),
//       });
//     } catch (err) {
//       //send to custom analytics server
//       throw err;
//     }
//   };
// };

// export const deleteItem = (itemId) => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await fetch(
//       `https://fast-food-cdff5.firebaseio.com/items/${itemId}.json?auth=${token}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Something went wrong!");
//     }

//     dispatch({ type: DELETE_ITEM, itemId: itemId });
//   };
// };

// export const createItem = (title, price, imageUrl) => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const userId = getState().auth.userId;
//     const response = await fetch(
//       `https://fast-food-cdff5.firebaseio.com/items.json?auth=${token}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           price,
//           imageUrl,
//           ownerId: userId,
//         }),
//       }
//     );

//     const resData = await response.json();

//     console.log(resData);

//     dispatch({
//       type: CREATE_ITEM,
//       itemData: {
//         id: resData.name,
//         title,
//         price,
//         imageUrl,
//         ownerId: userId,
//       },
//     });
//   };
// };

// export const updateItem = (id, title, price, imageUrl) => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await fetch(
//       `https://fast-food-cdff5.firebaseio.com/items/${id}.json?auth=${token}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           price,
//           imageUrl,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Something went wrong!");
//     }

//     dispatch({
//       type: UPDATE_ITEM,
//       itemId: id,
//       itemData: {
//         title,
//         price,
//         imageUrl,
//       },
//     });
//   };
// };

import Meal from "../../models/Meals";

export const DELETE_ITEM = "DELETE_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const SET_ITEMS = "SET_ITEMS";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://fast-food-cdff5.firebaseio.com/items.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedItems = [];

      for (const key in resData) {
        loadedItems.push(
          new Meal(
            key,
            "s1",
            resData[key].title,
            resData[key].price,
            resData[key].imageUrl
          )
        );
      }
      dispatch({ type: SET_ITEMS, items: loadedItems });
    } catch (err) {
      //send to custom analytics server
      throw err;
    }
  };
};

export const deleteItem = (itemId) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://fast-food-cdff5.firebaseio.com/items/${itemId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({ type: DELETE_ITEM, itemId: itemId });
  };
};

export const createItem = (title, price, imageUrl) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://fast-food-cdff5.firebaseio.com/items.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          imageUrl,
        }),
      }
    );

    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: CREATE_ITEM,
      itemData: {
        id: resData.name,
        title,
        price,
        imageUrl,
      },
    });
  };
};

export const updateItem = (id, title, price, imageUrl) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://fast-food-cdff5.firebaseio.com/items/${itemId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          imageUrl,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({
      type: UPDATE_ITEM,
      itemId: id,
      itemData: {
        title,
        price,
        imageUrl,
      },
    });
  };
};
