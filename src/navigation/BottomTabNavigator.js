import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../styles/global";
import LogoutButton from "../components/LogoutButton";
import BottomTabButton from "../components/BottomTabButton";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuth } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  const { logout } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ navigation }) => ({
        tabBarLabel: "",
        tabBarItemStyle: styles.tabBarItemStyle,
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Posts",
          headerRight: () => <LogoutButton onPress={() => logout()} />,
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="grid-outline" isFocused={focused} />
          ),
        })}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Create post",
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="add-outline" isFocused={focused} />
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="person" isFocused={focused} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemStyle: {
    display: "flex",
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border_gray,
  },
});

export default BottomTabNavigator;
