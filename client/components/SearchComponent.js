import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you're using FontAwesome

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      <TextInput placeholder="Search Property" style={styles.input} />
      <TouchableOpacity>
        <Icon
          name="heart-o"
          size={20}
          color="#000"
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%", // Set this to the width you want
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  favoriteIcon: {
    marginLeft: 10,
  },
});

export default SearchComponent;
