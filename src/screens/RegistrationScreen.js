import { useReducer, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  Keyboard,
  Pressable,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { colors } from "../../styles/global";

import Input from "../components/Input";
import Button from "../components/Button";
import ShowPasswordButton from "../components/ShowPasswordButton";
import { loginDB, registerDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useReducer(
    (state, action) => {
      return { ...state, [action.type]: action.payload };
    },
    {
      name: "",
      email: "",
      password: "",
    }
  );

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const errorsMessages = {
    name: "Введіть ім'я",
    email: "Введіть адресу електронної пошти",
    password: "Введіть пароль",
  };

  const validateForm = () => {
    const currentErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (form.name === "") {
      currentErrors.name = errorsMessages.name;
    }

    if (form.email === "") {
      currentErrors.email = errorsMessages.email;
    }

    if (form.password === "") {
      currentErrors.password = errorsMessages.password;
    }

    setErrors(currentErrors);

    if (Object.values(currentErrors).every((error) => error === "")) {
      return true;
    }

    return false;
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleNameChange = (value) => {
    setForm({ type: "name", payload: value });
  };

  const handleEmailChange = (value) => {
    setForm({ type: "email", payload: value });
  };

  const handlePasswordChange = (value) => {
    setForm({ type: "password", payload: value });
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onLogin = async () => {
    navigation.navigate("Login");
  };

  const onRegister = () => {
    if (!validateForm()) {
      return;
    }

    try {
      registerDB({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      loginDB({ email: form.email, password: form.password }, dispatch);
    } catch (err) {
      Alert.alert(err.message);
      console.error("Register error:", err);
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={require("../../assets/login-background.png")}
          resizeMode="cover"
          style={styles.container}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={form.name}
                autofocus={true}
                placeholder="Ім'я"
                errorMessage={errors.name}
                onTextChange={handleNameChange}
              />

              <Input
                value={form.email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                errorMessage={errors.email}
                onTextChange={handleEmailChange}
              />

              <Input
                value={form.password}
                placeholder="Пароль"
                errorMessage={errors.password}
                rightButton={<ShowPasswordButton showPassword={showPassword} />}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onRegister}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєструватися
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.registerButtonText]}>
                  Вже є аккаунт?&nbsp;
                  <TouchableWithoutFeedback
                    style={{ paddingHorizontal: 8 }}
                    onPress={onLogin}
                  >
                    <Text style={styles.signUpText}>Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default RegistationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  registerButtonText: {
    color: colors.blue,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
