import { Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

// Icon on the navigation bar top right
const Delete = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Entypo name="trash" size={24} color="black" />
    </Pressable>
  );
};

export default Delete;
