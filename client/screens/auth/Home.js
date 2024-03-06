import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchComponent from "../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}>
        <SearchComponent />
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
