import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

// Icon on the navigation bar top right
const Plus = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name="plus" size={24} color="black" />
    </Pressable>
  );
};

export default Plus;
