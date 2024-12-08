import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { colors } from "../../styles/global";

const ShowPasswordButton = ({ showPassword }) => {
  return (
    <TouchableOpacity
      style={styles.passwordButtonContainer}
      onPress={showPassword}
    >
      <Text style={[styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );
};

export default ShowPasswordButton;

const styles = StyleSheet.create({
  passwordButtonContainer: {
    height: 50,
    justifyContent: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
});
