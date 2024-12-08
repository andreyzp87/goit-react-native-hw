import { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

import { colors } from "../../styles/global";

const Input = ({
  value,
  onTextChange,
  placeholder,
  errorMessage,
  rightButton,
  autofocus = false,
  secureTextEntry = false,
  onBlur: onBlurCustom,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);

    if (onBlurCustom) {
      onBlurCustom();
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.input, isFocused && styles.focused]}>
        <TextInput
          value={value}
          autoFocus={autofocus}
          onChangeText={onTextChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={styles.baseText}
          autoCapitalize="none"
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {rightButton}
      </View>

      {errorMessage && (
        <View style={{ marginLeft: 16 }}>
          <Text style={{ color: colors.red }}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
  },
  baseText: {
    height: 50,
    fontWeight: "400",
    fontSize: 16,
    color: colors.black_primary,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
});

export default Input;
