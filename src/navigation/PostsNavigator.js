import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "../components/BackButton";
import LogoutButton from "../components/LogoutButton";
import PostsScreen from "../screens/PostsScreen";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

const PostsNavigator = () => {
  const { logout } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogoutButton onPress={() => logout()} />,
          tabBarIcon: ({ focused }) => (
            <BottomTabButton icon="grid-outline" isFocused={focused} />
          ),
        }}
      />
      <Stack.Screen
        name="Map"
        options={({ navigation }) => ({
          title: "Карта",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
        component={MapScreen}
      />
      <Stack.Screen
        name="Comments"
        options={({ navigation }) => ({
          title: "Коментарі",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
        component={CommentsScreen}
      />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
