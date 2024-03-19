import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchComponent from "../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/Footer";
import SliderComponent from "../../components/SliderComponent";
import PromotionSlider from "../../components/PromotionSlider";
import RoomCard from "../../components/RoomCard";
import RoomSlider from "../../components/RoomSlider";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}>
        <SearchComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* top slider */}
          <PromotionSlider />

          {/* room component */}
          <RoomCard />
          {/* <View style={{ flex: 1 }}><RoomSlider /></View> */}
          {/* <SliderComponent /> */}
          <Text>Hello1234</Text>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    //paddingLeft: 12,
    backgroundColor: "#fff",
  },
});
