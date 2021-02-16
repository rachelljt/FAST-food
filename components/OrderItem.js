import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CheckBox } from "react-native-elements";

import CartItem from "./CartItem";
import Colors from "../constants/colors";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.totalAmt}>${props.amount /*.toFixed(2) */}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          color="black"
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
        />
      </View>
      <View>
        {showDetails && (
          <View>
            {props.items.map((cartItem) => (
              <View>
                <CartItem
                  key={cartItem.mealId}
                  quantity={cartItem.mealQuantity}
                  title={cartItem.mealTitle}
                  amount={cartItem.sum}
                  preference={cartItem.mealPreference}
                  deletable={false}
                />
              </View>
            ))}
          </View>
        )}
        {props.isSeller && (
          <View>
            <CheckBox
              center
              title="Order Completed"
              iconRight
              iconType="material"
              checkedIcon="done"
              uncheckedIcon="clear"
              checkedColor="green"
              checked={orderDone}
              onPress={() => setOrderDone(true)}
              checked={orderDone}
            />
          </View>
        )}
        {!props.isSeller && false && (
          <Text style={styles.myText}>Order Completed!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    // alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  totalAmt: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
  cartStyle: {
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
  },
  myText: {
    textAlign: "center",
    fontSize: 15,
    color: "red",
  },
});

export default OrderItem;

// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// import CartItem from "./CartItem";

// const OrderItem = (props) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <View style={styles.screen}>
//       <View style={styles.summary}>
//         <Text style={styles.totalAmt}>${props.amount /*.toFixed(2) */}</Text>
//         <Text style={styles.date}>{props.date}</Text>
//       </View>
//       <Button
//         title={showDetails ? "Hide Details" : "Show Details"}
//         color="white"
//         onPress={() => {
//           setShowDetails((prevState) => !prevState);
//         }}
//       />
//       {showDetails && (
//         <View style={styles.detailItems}>
//           {props.items.map(
//             (cartItem) =>
//               function render() {
//                 <CartItem
//                   key={cartItem.mealId}
//                   quantity={cartItem.mealQuantity}
//                   title={cartItem.mealTitle}
//                   amount={cartItem.sum}
//                   preference={cartItem.mealPreference}
//                   deletable={false}
//                 />;
//               }
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     shadowColor: "black",
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     backgroundColor: "pink",
//     margin: 20,
//     padding: 10,
//     alignItems: "center",
//   },
//   summary: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     marginBottom: 15,
//   },
//   totalAmt: {
//     fontSize: 16,
//   },
//   date: {
//     fontSize: 16,
//   },
//   detailItems: {
//     width: "100%",
//   },
// });

// export default OrderItem;
