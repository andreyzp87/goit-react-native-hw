import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../styles/global";
import Input from "../components/Input";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../utils/auth";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user.userInfo);

  const [userName, setUserName] = useState("");

  const handleImageUpload = async (userId, file, fileName) => {};

  const pickImage = async () => {};

  const onUserNameChange = async () => {
    await updateUserProfile({
      ...user,
      displayName: userName,
    });
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Name:</Text>
        <Text>{user.displayName}</Text>
      </View>

      <Input
        value={userName}
        onBlur={onUserNameChange}
        outerStyles={{ width: "60%" }}
        onTextChange={setUserName}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Email:</Text>
        <Text>{user.email}</Text>
      </View>

      <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
        <Ionicons size={32} name="camera" color={colors.orange} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black_primary,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  cameraButton: {
    marginTop: 20,
  },
});
