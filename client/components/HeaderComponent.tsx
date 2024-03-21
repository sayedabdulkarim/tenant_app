import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}></View>
      <View style={styles.rightSection}></View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {},
  leftSection: {},
  rightSection: {},
});
