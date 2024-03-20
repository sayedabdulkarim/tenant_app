import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RoomDetails = ({ navigation }) => {
  const goBack = () => {
    console.log({ navigation });
    navigation.goBack();
  };
  return (
    <View>
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

const styles = StyleSheet.create({});
