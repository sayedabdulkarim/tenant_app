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
//unauth
import AuthLanding from "./unauth/AuthLanding";
import Login from "../screens/unauth/Login";

//auth
import HomeScreen from "../screens/auth/Home";

const Index = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFE119" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"login"}
          screenOptions={({}) => ({
            headerShown: false,
          })}
        >
          <Stack.Group>
            {/* unauth */}
            <Stack.Screen name="auth" component={AuthLanding} />
            <Stack.Screen name="login" component={Login} />

            {/* auth */}
            <Stack.Screen name="home" component={HomeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Index;
