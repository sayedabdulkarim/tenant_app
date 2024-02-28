import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import CountryPicker from "react-native-country-picker-modal";

const Login = () => {
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [country, setCountry] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState("US"); // Default country code to US

  const submitForm = () => {
    console.log(
      `Phone: ${country ? `+${country.callingCode[0]}` : ""} ${phone}`
    );
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        <Header back={true} />
        <View style={styles.container}>
          <Text style={styles.title}>Login | Register</Text>

          <CountryPicker
            {...{
              countryCode,
              withFilter: true,
              withFlag: true,
              withCountryNameButton: true,
              withAlphaFilter: true,
              withCallingCode: true,
              onSelect,
            }}
            visible={false} // You can toggle this with a state variable as needed
          />

          <TextInput
            label="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
            left={
              <TextInput.Affix
                text={country ? `+${country.callingCode[0]}` : ""}
              />
            }
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
                icon={secureTextEntry ? "eye" : "eye-off"}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
          />

          <Button mode="contained" onPress={submitForm} style={styles.button}>
            Login | Register
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});
