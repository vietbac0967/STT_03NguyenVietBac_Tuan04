import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function () {
  const [passwordLength, setPasswordLength] = useState(0);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const toggleCheckboxLowerCase = () => {
    setIncludeLowerCase(!includeLowerCase);
  };
  const toggleCheckboxUpperCase = () => {
    setIncludeUpperCase(!includeUpperCase);
  };
  const toggleCheckboxNumber = () => {
    setIncludeNumber(!includeNumber);
  };
  const toggleCheckboxSymbol = () => {
    setIncludeSpecialSymbol(!includeSpecialSymbol);
  };

  const generatePassword = () => {
    let password = "";
    let characters = "";
    if (includeLowerCase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpperCase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumber) {
      characters += "0123456789";
    }
    if (includeSpecialSymbol) {
      characters += "!@#$%^&*()";
    }
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <Text style={styles.result}>{password}</Text>
        <View style={styles.groupInput}>
          <View style={styles.input}>
            <Text style={styles.text}>Password length</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setPasswordLength}
            ></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>Include lower case letters</Text>
            <View>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={toggleCheckboxLowerCase}
              >
                {includeLowerCase ? (
                  <Text style={styles.checkmark}>✓</Text>
                ) : (
                  <Text style={styles.checkmark}></Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.input}>
            <Text style={styles.text}>Include upcase letters</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={toggleCheckboxUpperCase}
            >
              {includeUpperCase ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.checkmark}></Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.input}>
            <Text style={styles.text}>Include number</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={toggleCheckboxNumber}
            >
              {includeNumber ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.checkmark}></Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.input}>
            <Text style={styles.text}>Include special symbol</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={toggleCheckboxSymbol}
            >
              {includeSpecialSymbol ? (
                <Text style={styles.checkmark}>✓</Text>
              ) : (
                <Text style={styles.checkmark}></Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => generatePassword()}
            width="100%"
            title="GENERATE PASSWORD"
            color="rgba(59, 59, 152, 1)"
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    backgroundImage:
      "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)",
  },
  content: {
    alignItems: "center",
    width: "90%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "rgba(35, 35, 91, 1)",
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 60,
  },
  result: {
    width: 297,
    height: 55,
    backgroundColor: "rgba(21, 21, 55, 1)",
    marginVertical: 10,
    color: "white",
    fontWeight: 700,
    textAlign: "center",
  },
  input: {
    flexDirection: "row",
    marginVertical: 10,
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  textInput: {
    width: 118,
    height: 33,
    backgroundColor: "white",
    marginLeft: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "white",
  },
  groupInput: {
    justifyContent: "space-around",
  },
  button: {
    width: 297,
    height: 55,
    marginVertical: 25,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  checkmark: {
    fontSize: 20,
  },
});
