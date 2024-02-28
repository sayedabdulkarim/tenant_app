import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, emtpyCart = false }) => {
  //misc
  const route = useRoute();
  const navigate = useNavigation();

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: -10,
            top: 0,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: "transparent" }}
            icon={"arrow-left"}
            color="black"
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
