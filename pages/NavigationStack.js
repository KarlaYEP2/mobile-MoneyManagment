import { StyleSheet, Modal, Button } from "react-native";
import RecentExpenses from "./RecentExpenses";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./AllExpenses";
import Plus from "../components/Plus";
import { useState } from "react";
import AddForm from "../components/AddForm";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const onClickHideOrShowModal = () => {
    setModalIsVisible((visbility) => !visbility);
  };

  // Callback function to receive data from the child
  const onClickHideModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <Modal visible={modalIsVisible} animationType="slide">
        <AddForm modalInvisible={onClickHideModal} />
        <Button title="cancel" onPress={onClickHideOrShowModal} />
      </Modal>

      <Stack.Navigator>
        <Stack.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            headerTitle: "All Expenses",
            headerRight: () => <Plus onPress={onClickHideOrShowModal} />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
