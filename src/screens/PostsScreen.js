import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

const PostsScreen = ({ navigation }) => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>Posts Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default PostsScreen;
