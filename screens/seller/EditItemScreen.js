import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import * as itemsActions from "../../store/actions/meals";
import Input from "../../components/UI/Input";
import Colors from "../../constants/colors";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const EditItemScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const itemId = props.navigation.getParam("itemId");
  const editedItem = useSelector((state) =>
    state.meals.stallItems.find((item) => item.id === itemId)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedItem ? editedItem.title : "",
      imageUrl: editedItem ? editedItem.imageUrl : "",
      price: editedItem ? editedItem.price : "0",
    },
    inputValidities: {
      title: editedItem ? true : false,
      imageUrl: editedItem ? true : false,
      price: editedItem ? true : false,
    },
    formIsValid: editedItem ? true : false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert(
        "Unable to Add Product",
        "Invalid input in the form, please try again.",
        [{ text: "ok" }]
      );
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      if (editedItem) {
        await dispatch(
          itemsActions.updateItem(
            itemId,
            formState.inputValues.title,
            +formState.inputValues.price,
            formState.inputValues.imageUrl
          )
        );
      } else {
        await dispatch(
          itemsActions.createItem(
            formState.inputValues.title,
            +formState.inputValues.price,
            formState.inputValues.imageUrl
          )
        );
      }
      props.navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, [dispatch, itemId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView style={styles.screen}>
        <View style={styles.textContainer}>
          <View style={styles.firstTextInput}>
            <Input
              id="title"
              label="Title"
              errorText="Please enter a valid title!"
              autoCapitalize="words"
              autoCorrect
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              initialValue={editedItem ? editedItem.title : ""}
              initiallyValid={!!editedItem}
              required
            />
          </View>
          <View style={styles.textInput}>
            <Input
              id="imageUrl"
              label="Image URL"
              errorText="Please enter a valid image url!"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              initialValue={editedItem ? editedItem.imageUrl : ""}
              initiallyValid={!!editedItem}
              required
            />
          </View>
          <View style={styles.textInput}>
            <Input
              id="price"
              label="Price"
              errorText="Please enter a valid price!"
              keyboardType="decimal-pad"
              onInputChange={inputChangeHandler}
              initialValue={editedItem ? editedItem.price.toString() : ""}
              initiallyValid={!!editedItem}
              required
              min={0.1}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditItemScreen.navigationOptions = (navigationData) => {
  const submitFunction = navigationData.navigation.getParam("submit");
  return {
    headerTitle: navigationData.navigation.getParam("itemId")
      ? "Edit Product"
      : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFunction}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.accent,
    marginTop: 50,
    marginHorizontal: 20,
  },
  firstTextInput: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  textInput: { marginBottom: 20, marginHorizontal: 20 },
});

export default EditItemScreen;
