import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../styles/global";
import LogoutButton from "../components/LogoutButton";
import BottomTabButton from "../components/BottomTabButton";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuth } from "../context/AuthContext";
import BackButton from "../components/BackButton";
import PostsNavigator from "./PostsNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  const { logout } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName="PostsNav"
      screenOptions={({ navigation }) => ({
        tabBarLabel: "",
        tabBarItemStyle: styles.tabBarItemStyle,
      })}
    >
      <Tab.Screen
        name="PostsNav"
        component={PostsNavigator}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="grid-outline" isFocused={focused} />
          ),
        })}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={({ navigation }) => ({
          title: "Створити Публікацію",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="add-outline" isFocused={focused} />
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Профіль",
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
