import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchComponent from "../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <SearchComponent />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
