import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Button, Text, useTheme, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLanding = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Logo and Title */}
          <View style={styles.logoContainer}>
            {/* Replace with your own image */}
            <Avatar.Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
              }}
              style={styles.logo}
            />
            <Text style={styles.title}>
              <Text style={styles.lightTitle}>Your Rental</Text> MADE EASY
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              // onPress={() => console.log("Login/Register")}
              onPress={() => navigation.navigate("login")}
              style={styles.btn}
            >
              Login | Register
            </Button>
            <Text
              onPress={() => console.log(" continue as guest")}
              style={styles.guestText}
            >
              Continue as Guest
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#FFD700", // Set your primary color here
    backgroundColor: "#FFE119", // This should be the same yellow as your StatusBar, but fully opaque
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20, // Adjust the padding as needed
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logo: {
    // width: 150, // Set your logo width
    // height: 150, // Set your logo height
    backgroundColor: "transparent",
    // borderWidth: 2,
    // borderColor: "red",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: "red", // Adjust according to your theme
    fontWeight: "bold",
  },
  lightTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 50, // Adjust the margin as needed
  },
  btn: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#000",
    padding: 8,
    fontWeight: "bold",
  },
  guestText: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AuthLanding;
