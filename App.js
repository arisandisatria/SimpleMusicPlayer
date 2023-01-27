import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, Dimensions } from "react-native";

import Header from "./components/Header";
import Controller from "./components/Controller";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Image
        source={require("./assets/images/ncsLogo.jpg")}
        style={styles.image}
      />
      <Controller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: windowWidth - 8,
    height: windowHeight / 2,
    borderRadius: 25,
  },
});
