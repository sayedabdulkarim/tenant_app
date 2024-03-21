import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Entypo, Ionicons } from "@expo/vector-icons";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconContainer}>
          <Avatar.Icon
            icon="heart-outline"
            size={40}
            color="#000"
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
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
  container: {
    borderWidth: 1,
    borderColor: "red",
  },
  leftSection: {},
  rightSection: {},
  iconContainer: {},
  backIcon: {},
  searchIcon: {
    backgroundColor: "#eee",
  },
  shareIcon: {
    backgroundColor: "#eee",
  },
});
