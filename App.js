import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  const [isRegistered, setIsRegistered] = useState(false);

  if (!fontsLoaded) {
    return (
      <View style={styles.section}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isRegistered) {
    return <LoginScreen updateRegistered={setIsRegistered} />;
  }

  return <RegistrationScreen updateRegistered={setIsRegistered} />;
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
