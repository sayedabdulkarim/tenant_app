import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../components/HeaderComponent";
import SliderComponent from "../../components/SliderComponent";

// Get the screen width
const { width: screenWidth } = Dimensions.get("window");

const RoomDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}>
        <HeaderComponent />
        <ScrollView>
          <SliderComponent style={{ width: screenWidth }} belowText={"One"} />
          <View style={styles.detailsContainer}>
            {/* price container */}
            <View style={styles.priceContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.price}>RM 1,400</Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.deposit}>
                  <Text style={styles.yellow}>ZERO</Text> DEPOSIT
                </Text>
                <Text style={styles.unit}>WHOLE UNIT</Text>
              </View>
            </View>
            {/*  */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 10,
  },
  container: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "green",
    //paddingLeft: 12,
    backgroundColor: "#fff",
    position: "relative",
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 12,
  },
  // price container
  priceContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftContainer: {
    // borderWidth: 1,
    // borderColor: "yellow",
    width: "40%",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  rightContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deposit: {
    borderWidth: 1,
    borderColor: "#90278e",
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#90278e",
    color: "#fff",
    overflow: "hidden",
    letterSpacing: 0.6,
  },
  yellow: {
    color: "#FFE119",
    fontWeight: "bold",
  },
  unit: {
    borderWidth: 1,
    borderColor: "#eee",
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#eee",
    overflow: "hidden",
    letterSpacing: 0.6,
  },
});
