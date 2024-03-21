import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RoomDetails = ({ navigation }) => {
  const goBack = () => {
    console.log({ navigation });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#bebebe" />
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text>RoomDetails</Text>
      <Text onPress={() => goBack()}>GO BACK</Text>
    </View>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    //paddingLeft: 12,
    backgroundColor: "#fff",
  },
});
