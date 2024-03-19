import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import SliderComponent from "./SliderComponent";

// Get the screen width
const { width: screenWidth } = Dimensions.get("window");

const RoomCard = ({ setParentSwipeEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>For You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
        <SliderComponent
          setParentSwipeEnabled={setParentSwipeEnabled}
          style={{ width: screenWidth }}
          belowText={"One"}
        />
        <SliderComponent
          setParentSwipeEnabled={setParentSwipeEnabled}
          style={{ width: screenWidth }}
          belowText={"Two"}
        />
      </ScrollView>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    // padding: 12,
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  contentContainer: {
    alignItems: "center",
  },
  scroll: {
    //   borderWidth: 2,
    // borderColor: "green",
  },
});
