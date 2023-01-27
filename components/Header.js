import { AntDesign, Ionicons } from "@expo/vector-icons";

import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={styles.title}>Now Playing</Text>
        <Ionicons name="ellipsis-horizontal-circle" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    width: windowWidth,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
});
