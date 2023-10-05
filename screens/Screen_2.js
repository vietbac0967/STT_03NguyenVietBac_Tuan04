import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-web";
export default function Screen_2() {
  const path = "../assets/usb.png";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../assets/usb.png")}
        />
        <Text style={styles.title}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.textStatus}>Cực kỳ hài lòng</Text>
        <View style={styles.stars}>
          <Image
            style={{ width: 39, height: 39, marginHorizontal: 10 }}
            source={require("../assets/star.png")}
          />
          <Image
            style={{ width: 39, height: 39, marginHorizontal: 10 }}
            source={require("../assets/star.png")}
          />
          <Image
            style={{ width: 39, height: 39, marginHorizontal: 10 }}
            source={require("../assets/star.png")}
          />
          <Image
            style={{ width: 39, height: 39, marginHorizontal: 10 }}
            source={require("../assets/star.png")}
          />
          <Image
            style={{ width: 39, height: 39, marginHorizontal: 10 }}
            source={require("../assets/star.png")}
          />
        </View>
        <View style={styles.pushImage}>
          <Entypo name="camera" size={32} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 700, paddingLeft: 20 }}>
            Thêm hình ảnh
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        ></TextInput>
        <Button title="GỬI" color={"rgba(21, 17, 235, 1)"}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  title: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    flex: 3,
  },
  textStatus: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
  },
  stars: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pushImage: {
    borderWidth: 1,
    borderColor: "rgba(21, 17, 235, 1)",
    flexDirection: "row",
    width: 293,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  input: {
    marginVertical: 10,
    width: 293,
    height: 222,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(196, 196, 196, 1)",
    fontWeight: 700,
    color: "rgba(196, 196, 196, 1)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
