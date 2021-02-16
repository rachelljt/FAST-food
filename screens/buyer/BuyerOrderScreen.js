import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import OrderItem from "../../components/OrderItem";
import * as ordersActions from "../../store/actions/orders";
import Colors from "../../constants/colors";

const BuyerOrderScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.orders.orders);
  orders.sort((a, b) => (a.id > b.id ? -1 : 1));

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(ordersActions.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> No orders found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
            isSeller={false}
          />
        )}
      />
    </View>
  );
};

BuyerOrderScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Orders History",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    // justifyContent: "center",
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default BuyerOrderScreen;

// import React, { useEffect, useState } from "react";
// import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import HeaderButton from "../../components/HeaderButton";
// import OrderItem from "../../components/OrderItem";
// import * as ordersActions from "../../store/actions/orders";
// import Colors from "../../constants/colors";

// const BuyerOrderScreen = (props) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const orders = useSelector((state) => state.orders.orders);
//   orders.sort((a, b) => (a.id > b.id ? -1 : 1));

//   const dispatch = useDispatch();

//   useEffect(() => {
//     setIsLoading(true);
//     dispatch(ordersActions.fetchOrders()).then(() => {
//       setIsLoading(false);
//     });
//   }, [dispatch]);

//   if (isLoading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }
//   return (
//     <FlatList
//       data={orders}
//       keyExtractor={(item) => item.id}
//       renderItem={(itemData) => (
//         <OrderItem
//           amount={itemData.item.totalAmount}
//           date={itemData.item.readableDate}
//           items={itemData.item.items}
//         />
//       )}
//     />
//   );
// };

// BuyerOrderScreen.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: "Your Orders",
//     headerLeft: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
//           onPress={() => {
//             navigationData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default BuyerOrderScreen;
