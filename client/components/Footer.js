import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const navigation = useNavigation();
  const isAuthenticated = false;

  const navigationHandler = (route) => {
    if (route === "login" && !isAuthenticated) {
      navigation.navigate("login");
    } else {
      navigation.navigate(route);
    }
  };

  const renderTabItem = (iconName, route, notificationCount) => {
    const isActive = activeRoute === route;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigationHandler(route)}
        style={styles.tabItem}
      >
        <Avatar.Icon
          icon={isActive ? iconName : `${iconName}-outline`}
          size={48}
          color={isActive ? "black" : "white"}
        />
        {notificationCount > 0 && route === "chat" && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTabItem("home", "home")}
      {renderTabItem("cart", "cart")}
      {renderTabItem("account", "profile")}
      {renderTabItem("forum", "chat", 15)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFE119",
    paddingVertical: 10,
  },
  badgeContainer: {
    position: "absolute",
    right: 6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 8,
    width: 26,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Footer;
