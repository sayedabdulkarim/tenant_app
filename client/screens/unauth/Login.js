import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
import PhoneInput from "../../components/PhoneComponentTwo";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

const Login = () => {
  //misc
  const inputTheme = {
    roundness: 8, // You can adjust the roundness to match your design
    colors: {
      // primary: "yellow", // color of the underline and placeholder when active
      // underlineColor: "transparent", // hide the underline
      background: "red", // background color of the input
      text: "black", // text color for the input text
      placeholder: "yellow", // color of the placeholder text when not focused
    },
  };

  //state
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [country, setCountry] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState("IN");

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
    <PaperProvider theme={inputTheme}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <SafeAreaView style={styles.safeArea}>
        <Header back={true} />
        <View style={styles.container}>
          <Text style={styles.title}>Login | Register</Text>

          <PhoneInput />

          {/* <View style={styles.phoneContainer}>
            <View style={styles.countryPicker}>
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
                theme={DARK_THEME}
                visible={false}
              />
            </View>

            <TextInput
              label="Phone"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={styles.phoneInput}
              left={
                <TextInput.Affix
                  text={country ? `+${country.callingCode[0]} ` : ""}
                />
              }
            />
          </View> */}

          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
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
          </View>

          <Button mode="contained" onPress={submitForm} style={styles.button}>
            Login | Register
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
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
    // justifyContent: "space-between",
    padding: 8,
    paddingHorizontal: 20,
    marginTop: 72,
    borderWidth: 2,
    borderColor: "red",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: 10,
    backgroundColor: "#F8F9F9",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    // borderWidth: 1,
    // borderColor: "red",
  },
  button: {
    marginTop: 10,
  },
});
