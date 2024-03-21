import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../components/HeaderComponent";
import SliderComponent from "../../components/SliderComponent";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

// Get the screen width
const { width: screenWidth } = Dimensions.get("window");

const RoomDetails = ({ navigation }) => {
  //func
  const openMaps = (latitude, longitude) => {
    const url = Platform.select({
      ios: `maps:${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}`,
    });

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

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
            {/* location details */}
            <View style={styles.locationDetailsContainer}>
              <Text style={styles.propertyName}>
                Henna Residence, Wangsa Maju
              </Text>
              <View style={styles.locationAddressContainer}>
                <Text
                  style={styles.locationAddressText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  The Quartz WM, Jalan 34/ 26, Wangsa Maju
                </Text>
                <TouchableOpacity
                  onPress={() => openMaps("21.468021", "83.995393")}
                >
                  <MaterialCommunityIcons
                    name="map-marker-radius-outline"
                    size={24}
                    color="black"
                    style={styles.locationAddressIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
  //
  locationDetailsContainer: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: 20,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: "700",
  },
  locationAddressContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  locationAddressText: {
    fontWeight: "500",
    width: 220,
    // borderWidth: 1,
    // borderColor: "red",
  },
  locationAddressIcon: {
    marginLeft: 5,
  },
  //
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
