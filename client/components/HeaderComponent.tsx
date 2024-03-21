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

        <TouchableOpacity style={[styles.iconContainer, { marginLeft: 10 }]}>
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
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  leftSection: {},
  rightSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    // padding: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 50,
  },
  backIcon: {},
  searchIcon: {
    backgroundColor: "#eee",
  },
  shareIcon: {
    backgroundColor: "#eee",
  },
});
