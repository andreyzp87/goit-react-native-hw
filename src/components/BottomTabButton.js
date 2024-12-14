import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";

const LogoutButton = ({ icon, isFocused }) => {
  return (
    <View
      style={[
        styles.addButton,
        { backgroundColor: isFocused ? colors.orange : "transparent" },
      ]}
    >
      <Ionicons
        name={icon}
        size={24}
        color={isFocused ? colors.white : colors.black_primary}
      />
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});
