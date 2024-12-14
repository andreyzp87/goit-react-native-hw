import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

const CommentsScreen = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Comments Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default CommentsScreen;
