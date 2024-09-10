import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./AllExpenses";
import RecentExpenses from "./RecentExpenses";
import NavigationStack from "./NavigationStack";
import NavigateToRecent from "./NavigateToRecent";

const Tab = createBottomTabNavigator();

const BottomNavigationStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="All Expenses" component={NavigationStack} />
      <Tab.Screen name="Recent" component={NavigateToRecent} />
    </Tab.Navigator>
  );
};

export default BottomNavigationStack;

const styles = StyleSheet.create({});
