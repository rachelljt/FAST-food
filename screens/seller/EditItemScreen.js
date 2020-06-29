import React, { useEffect, useCallback, useReducer } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import * as itemsActions from "../../store/actions/meals";
import Input from "../../components/UI/Input";

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
  const itemId = props.navigation.getParam("itemId");
  const editedItem = useSelector((state) =>
    state.meals.stallItems.find((item) => item.id === itemId)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedItem ? editedItem.title : "",
      imageUrl: editedItem ? editedItem.imageUrl : "",
      price: editedItem ? editedItem.price : "",
    },
    inputValidities: {
      title: editedItem ? true : false,
      imageUrl: editedItem ? true : false,
      price: editedItem ? true : false,
    },
    formIsValid: editedItem ? true : false,
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert(
        "Unable to Add Product",
        "Invalid input in the form, please try again.",
        [{ text: "ok" }]
      );
      return;
    }
    if (editedItem) {
      dispatch(
        itemsActions.updateItem(
          itemId,
          formState.inputValues.title,
          +formState.inputValues.price,
          formState.inputValues.imageUrl
        )
      );
    } else {
      dispatch(
        itemsActions.createItem(
          formState.inputValues.title,
          +formState.inputValues.price,
          formState.inputValues.imageUrl
        )
      );
    }
    props.navigation.goBack();
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.overallContainer}>
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

          <Input
            id="imageUrl"
            label="Image URL "
            errorText="Please enter a valid image url!"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            initialValue={editedItem ? editedItem.imageUrl : ""}
            initiallyValid={!!editedItem}
            required
          />

          <Input
            id="price"
            label="Price"
            errorText="Please enter a valid price!"
            keyboardType="decimal-pad"
            onInputChange={inputChangeHandler}
            initialValue={editedItem ? editedItem.price : 0}
            initiallyValid={!!editedItem}
            required
            min={0.1}
          />
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
  overallContainer: {
    margin: 20,
  },
});

export default EditItemScreen;
