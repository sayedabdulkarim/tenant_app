import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { Entypo, Ionicons } from "@expo/vector-icons";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="black"
          style={styles.backIcon}
        />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.favoriteIconContainer}>
          <Avatar.Icon
            icon="heart-outline"
            size={40}
            color="#000"
            style={styles.searchIcon}
          />
          <Entypo
            name="share"
            size={24}
            color="black"
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {},
  leftSection: {},
  rightSection: {},
  favoriteIconContainer: {},
  backIcon: {},
  searchIcon: {
    backgroundColor: "transparent",
  },
  shareIcon: {
    backgroundColor: "transparent",
  },
});
