import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//screens
import Login from "../screens/unauth/Login";

const Index = () => {
  return (
    <>
      <StatusBar
        backgroundColor="rgba(255, 215, 0, 0.9)"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"login"}
          screenOptions={({}) => ({
            headerShown: false,
          })}
        >
          <Stack.Group>
            <Stack.Screen name="login" component={Login} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Index;
