import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
export default function Screen_1() {
  const users = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "user",
      password: "user",
    },
    {
      username: "John",
      password: "123",
    },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const showToast = (type, message) => {
    Toast.show({
      type: type,
      position: "top",
      text1: message,
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  const cleanData = () => {
    setUsername("");
    setPassword("");
  };

  const validate = (inputUsername, inputPassword) => {
    if (inputUsername === "" || inputPassword === "") {
      setMessage("Please enter username and password");
      showToast("error", "Please enter username and password");
    } else {
      let validUser = false;
      for (let i = 0; i < users.length; i++) {
        if (
          inputUsername === users[i].username &&
          inputPassword === users[i].password
        ) {
          validUser = true;
          break; // Exit the loop when a valid user is found
        }
      }
      if (validUser) {
        setMessage("Login success");
        cleanData();
        showToast("success", "Login success");
      } else {
        setMessage("Login fail");
        cleanData();
        showToast("error", "Login fail");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Toast />
      <Text style={styles.title}>LOGIN</Text>
      {/* <Text style={{ textAlign: "center", color: color }}>{message}</Text> */}
      <View style={styles.content}>
        <View style={styles.forInput}>
          <FontAwesome
            style={styles.icon}
            name="user"
            size={32}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View style={styles.forInput}>
          <Foundation style={styles.icon} name="lock" size={32} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <Ionicons
            style={{ paddingRight: 10 }}
            name="ios-eye"
            size={32}
            color="black"
          />
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => validate(username, password)}
        >
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textBottom}>Forgot your password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontWeight: 700,
    paddingTop: 100,
  },
  content: {
    flex: 3,
    alignItems: "center",
  },
  forInput: {
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    width: 330,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    paddingLeft: 20,
  },
  input: {
    paddingLeft: 10,
    height: "100%",
    width: "90%",
  },
  btnLogin: {
    backgroundColor: "rgba(6, 0, 0, 1)",
    width: 330,
    height: 54,
    justifyContent: "center",
    marginVertical: 40,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
  },
  textBottom: {
    fontSize: 20,
    fontWeight: 700,
  },
});
