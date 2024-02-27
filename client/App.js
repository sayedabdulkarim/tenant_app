import * as React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { Button, Text, useTheme, Avatar } from "react-native-paper";

const App = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.container}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          {/* Replace with your own image */}
          <Avatar.Image
            source={{
              // uri: "https://e7.pngegg.com/pngimages/48/511/png-clipart-computer-icons-home-home-angle-text-thumbnail.png",
              uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Your Rental MADE EASY</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => console.log("Login/Register")}
          >
            Login | Register
          </Button>
          <Button mode="text" onPress={() => console.log("Continue as Guest")}>
            Continue as Guest
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFD700", // Set your primary color here
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
  },
  logo: {
    width: 150, // Set your logo width
    height: 150, // Set your logo height
    resizeMode: "cover",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "red",
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    color: "black", // Adjust according to your theme
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 50, // Adjust the margin as needed
  },
});

export default App;
