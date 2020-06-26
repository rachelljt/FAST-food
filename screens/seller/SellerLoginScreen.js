import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import Header from "../../components/Header";
import TitleText from "../../constants/TitleText";

const SellerLoginScreen = (props) => {
  const [Username, onChangeUsername] = useState("");
  const [Password, onChangePassword] = useState("");

  const inputHandler = () => {
    if (Username === "") {
      Alert.alert("Invalid Username");
    } else if (Password == "") {
      Alert.alert("Invalid Password");
    } else {
      props.navigation.replace({
        routeName: "SellerMenu",
        params: {
          userID: Username,
        },
      });
    }
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.myText}>Login</TitleText>
      <View style={styles.input}>
        <TextInput
          style={styles.myOtherText}
          placeholder="Username"
          onChangeText={(text) => onChangeUsername(text)}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.myOtherText}
          ref={(input) => {
            this.password = input;
          }}
          placeholder="Password"
          onChangeText={(text) => onChangePassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.button1}>
          <View style={styles.button2}>
            <Button
              title="Back"
              color="black"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.button2}>
            <Button title="Login" color="black" onPress={inputHandler} />
          </View>
        </View>
      </View>
    </View>
  );
};

SellerLoginScreen.navigationOptions = {
  headerTitle: "",
  headerBackground: () => <Header />,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  myText: {
    fontFamily: "opensans-semibold",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },

  myOtherText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    color: "black",
  },
  input: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  button1: {
    flexDirection: "row",
  },
  button2: {
    marginHorizontal: 40,
    borderWidth: 2,
    borderColor: "#f7287b",
    backgroundColor: "#f7287b",
  },
});

export default SellerLoginScreen;
