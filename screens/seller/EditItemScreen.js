import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const EditItemScreen = (props) => {
  const itemId = props.navigation.getParam("itemId");
  const editedItem = useSelector((state) =>
    state.meals.stallItems.find((item) => item.id === itemId)
  );

  const [title, setTitle] = useState(editedItem ? editedItem.title : "");
  const [imageUrl, setImageUrl] = useState(editedItem ? editedItem.image : "");
  const [price, setPrice] = useState(editedItem ? editedItem.price : "");

  return (
    <ScrollView>
      <View style={styles.overallContainer}>
        <View style={styles.container}>
          <Text style={styles.label}> Title </Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}> Image URL </Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}> Price </Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditItemScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam("itemId")
      ? "Edit Product"
      : "Add Product",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  overallContainer: {
    margin: 20,
  },
  container: {
    width: "100%",
  },
  label: {
    fontFamily: "opensans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditItemScreen;
