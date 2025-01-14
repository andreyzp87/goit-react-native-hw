import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <Stack.Navigator
      // initialRouteName=""
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
