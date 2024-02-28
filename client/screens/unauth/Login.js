import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, Menu, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [countryCode, setCountryCode] = React.useState("+1"); // Default country code
  const [menuVisible, setMenuVisible] = React.useState(false);

  const submitForm = () => {
    console.log(`Phone: ${countryCode} ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Login</Text>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button onPress={() => setMenuVisible(true)}>{countryCode}</Button>
          }
        >
          {/* List your country codes here */}
          <Menu.Item
            onPress={() => {
              setCountryCode("+1");
              setMenuVisible(false);
            }}
            title="+1"
          />
          <Menu.Item
            onPress={() => {
              setCountryCode("+91");
              setMenuVisible(false);
            }}
            title="+91"
          />
          {/* Add more Menu.Items as needed for other country codes */}
        </Menu>
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
          left={<TextInput.Affix text={countryCode} />}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          right={
            <TextInput.Icon
              name={secureTextEntry ? "eye" : "eye-off"}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
        />
        <Button mode="contained" onPress={submitForm}>
          Submit
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#FFD700", // Set your primary color here
    backgroundColor: "rgba(255, 215, 0, 1)", // This should be the same yellow as your StatusBar, but fully opaque
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  input: {
    marginBottom: 10,
  },
});
