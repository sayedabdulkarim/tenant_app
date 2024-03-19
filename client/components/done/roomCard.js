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
        />
        <SliderComponent
          setParentSwipeEnabled={setParentSwipeEnabled}
          style={{ width: screenWidth }}
        />
      </ScrollView>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {},
  HeaderText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  contentContainer: {
    alignItems: "center",
  },
  scroll: {
    borderWidth: 2,
    borderColor: "green",
  },
  // ... (Any other styles you need)
});
