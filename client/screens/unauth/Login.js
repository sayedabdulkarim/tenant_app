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
      underlineColor: "transparent", // hide the underline
      placeholder: "yellow",
      background: "red", // background color of the input
      text: "black", // text color for the input text
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

          <View style={styles.flexGrow} />

          <View style={styles.submitButtonContainer}>
            <Button mode="contained" onPress={submitForm} style={styles.button}>
              Login | Register
            </Button>

            <Text style={styles.footerText}>
              By continuing, you agree to the{" "}
              <Text style={styles.linkText}>Term of Use</Text> and are aware of
              the <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>
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
  flexGrow: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
    padding: 8,
    paddingHorizontal: 20,
    marginTop: 72,
    // borderWidth: 2,
    // borderColor: "red",
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
  submitButtonContainer: {
    marginBottom: 50,
  },
  button: {
    // If you want the button to be at the very bottom
    // marginBottom: 20, // Adjust the value as needed
    backgroundColor: "rgba(255, 215, 0, 1)",
    width: "100%",
    borderRadius: 8,
    // backgroundColor: "#000",
    padding: 8,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 16, // Space between button and text
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
  },
  linkText: {
    color: "black", // Make terms and privacy policy look like links
    textDecorationLine: "underline",
  },
});
