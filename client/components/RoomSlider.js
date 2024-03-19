import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import RoomCard from "./RoomCard";
//import SliderComponent from "./SliderComponent";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

// Child Slider Component
export const ChildSlider = () => (
  <Swiper style={styles.wrapper} showsButtons={true}>
    <View style={styles.slide}>
      <Text style={styles.text}>Child Slide 1</Text>
    </View>
    <View style={styles.slide}>
      <Text style={styles.text}>Child Slide 2</Text>
    </View>
    <View style={styles.slide}>
      <Text style={styles.text}>Child Slide 3</Text>
    </View>
  </Swiper>
);

// Parent Slider Component
const ParentSlider = () => (
  <Swiper style={styles.wrapper} showsButtons={true}>
    <View style={styles.slide}>
      <Text style={styles.text}>Parent Slide 1</Text>
      <ChildSlider />
      {/* <RoomCard /> */}
      {/* <SliderComponent /> */}
    </View>
    <View style={styles.slide}>
      <Text style={styles.text}>Parent Slide 2</Text>
      <ChildSlider />
      {/* <RoomCard /> */}
      {/* <SliderComponent /> */}
    </View>
    <View style={styles.slide}>
      <Text style={styles.text}>Parent Slide 3</Text>
      <ChildSlider />
      {/* <SliderComponent /> */}
      {/* <RoomCard /> */}
    </View>
  </Swiper>
);

export default ParentSlider;
