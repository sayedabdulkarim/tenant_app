import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchComponent from "../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import PromotionSlider from "../../components/PromotionSlider";

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}>
        <SearchComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PromotionSlider />
          <SliderComponent />
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </ScrollView>
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
    borderWidth: 1,
    borderColor: "red",
    paddingTop: 10,
  },
});
