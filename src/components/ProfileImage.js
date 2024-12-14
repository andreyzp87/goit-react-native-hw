import { View, Image } from "react-native";

const ProfileImage = () => {
  return (
    <View>
      <Image source={require("../assets/profile-example.jpg")} />
    </View>
  );
};

export default ProfileImage;
