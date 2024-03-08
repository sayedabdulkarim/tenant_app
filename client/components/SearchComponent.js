import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Avatar.Icon
          icon="magnify"
          size={40}
          color="#000"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search Property" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.favoriteIconContainer}>
        <Avatar.Icon
          icon="heart-outline"
          size={40}
          color="#000"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 12,
    // borderWidth: 1,
    // borderColor: "green",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    backgroundColor: "transparent",
  },
  favoriteIconContainer: {},
});

export default SearchComponent;
