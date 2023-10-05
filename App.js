import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen_1 from "./screens/Screen_1";
import Screen_2 from "./screens/Screen_2";
import Screen_3 from "./screens/Screen_3";
import Screen_4 from "./screens/Screen_4";

export default function App() {
  return (
    // <Screen_1 />
    // <Screen_2/>
    <Screen_3 />
    // <Screen_4 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
