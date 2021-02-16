import React, { useState, useEffect, useReducer, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import Input from "../../components/UI/Input";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/colors";
import * as authActions from "../../store/actions/auth";

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

const BuyerLoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;

    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("BuyerMain");
      // props.navigation.replace({
      //   routeName: "BuyerMain",
      //   params: {
      //     userID: Username,
      //   },
      // });
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

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

  // const [Username, onChangeUsername] = useState("");
  // const [Password, onChangePassword] = useState("");

  // const inputHandler = () => {
  //   if (Username === "" || Password === "") {
  //     Alert.alert("Please enter Username/Password");
  //   } else {
  //     props.navigation.replace({
  //       routeName: "BuyerMain",
  //       params: {
  //         userID: Username,
  //       },
  //     });
  //   }
  // };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      {/* <LinearGradient
        colors={["white", "#F7EDF0", "#F4CBC6", "#c5979D"]}
        style={styles.gradient}
      > */}
      <View style={styles.titleContainer}>
        <Text style={styles.buyerTitle}> BUYER </Text>
        <Text style={styles.title}>Hello There!</Text>
        <Text style={styles.subTitle}>Sign in/Sign up to continue.</Text>
      </View>
      <ScrollView style={styles.inputContainer}>
        <View style={styles.userInputContainer}>
          <Input
            style={styles.input}
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputChangeHandler}
            initialValue=""
            // returnKeyType="next"
            // onSubmitEditing={() => this.password.focus()}
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputChangeHandler}
            initialValue=""
            // ref={(input) => {
            //   this.password = input;
            // }}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <View style={styles.loginButton}>
            <Button
              title={isSignup ? "Sign Up" : "Login"}
              onPress={authHandler}
              color="black"
            />
          </View>
        )}

        <View style={styles.signupButton}>
          <Button
            /* New User? */ title={`Switch to ${
              isSignup ? "Login" : "Sign Up"
            }`}
            onPress={() => {
              setIsSignup((prevState) => !prevState);
            }}
            //color={Colors.accent}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

BuyerLoginScreen.navigationOptions = {
  headerTitle: "",
  headerBackground: () => <Header />,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  // gradient: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 40,
  },
  buyerTitle: {
    fontFamily: "opensans-semibold",
    textAlign: "left",
    color: Colors.primary,
    fontSize: 30,
  },
  title: {
    fontFamily: "opensans-semibold",
    fontSize: 30,
    //padding: 10,
    textAlign: "left",
  },
  subTitle: {
    fontFamily: "opensans-regular",
    fontSize: 20,
    textAlign: "left",
  },
  userInputContainer: {
    borderWidth: 1,
    alignItems: "stretch",
    borderColor: Colors.primary,
    borderRadius: 15,
    paddingVertical: 35,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
  },
  inputContainer: {
    width: "80%",
    height: "30%",
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    height: "10%",
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 15,
  },
});

export default BuyerLoginScreen;

// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

// import Header from "../../components/Header";

// const BuyerLoginScreen = (props) => {
//   const [Username, onChangeUsername] = useState("");
//   const [Password, onChangePassword] = useState("");

//   const inputHandler = () => {
//     if (Username === "" || Password === "") {
//       Alert.alert("Please enter Username/Password");
//     } else {
//       props.navigation.replace({
//         routeName: "BuyerMain",
//         params: {
//           userID: Username,
//         },
//       });
//     }
//   };

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.myText}>Welcome to FAST food!</Text>
//       <View style={styles.input}>
//         <TextInput
//           style={styles.myOtherText}
//           placeholder="Username"
//           onChangeText={(text) => onChangeUsername(text)}
//           autoCorrect={false}
//           autoCapitalize="none"
//           returnKeyType="next"
//           onSubmitEditing={() => this.password.focus()}
//         ></TextInput>
//         <TextInput
//           style={styles.myOtherText}
//           ref={(input) => {
//             this.password = input;
//           }}
//           placeholder="Password"
//           onChangeText={(text) => onChangePassword(text)}
//           secureTextEntry={true}
//         ></TextInput>
//         <View style={styles.button1}>
//           <View style={styles.button2}>
//             <Button
//               title="Back"
//               color="black"
//               onPress={() => {
//                 props.navigation.goBack();
//               }}
//             />
//           </View>
//           <View style={styles.button2}>
//             <Button title="Login" color="black" onPress={inputHandler} />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// BuyerLoginScreen.navigationOptions = {
//   headerTitle: "",
//   headerBackground: () => <Header />,
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "pink",
//     padding: 20,
//   },
//   myText: {
//     fontFamily: "avocado-creamy",
//     fontSize: 50,
//     padding: 10,
//     textAlign: "center",
//   },

//   myOtherText: {
//     fontFamily: "Arial",
//     fontSize: 20,
//     borderWidth: 1,
//     borderColor: "white",
//     width: "100%",
//     padding: 10,
//     marginBottom: 10,
//     color: "black",
//   },
//   input: {
//     flex: 1,
//     padding: 20,
//     width: "100%",
//     alignItems: "center",
//   },
//   button1: {
//     flexDirection: "row",
//   },
//   button2: {
//     marginHorizontal: 40,
//     borderWidth: 2,
//     borderColor: "#f7287b",
//     backgroundColor: "#f7287b",
//   },
// });

// export default BuyerLoginScreen;
