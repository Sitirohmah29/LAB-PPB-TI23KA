import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyFriends from "./src/pertemuan-4/components/Friends/MyFriends";

export default function App() {
  return (
    <View style={styles.container}>
      <MyFriends />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
