import { StyleSheet, Modal, Button } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpenses from "./RecentExpenses";
import AddForm from "./../components/AddForm";
import Plus from "./../components/Plus";

const Stack = createNativeStackNavigator();

const NavigateToRecent = () => {
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
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            headerTitle: "Recent Expenses",
            headerRight: () => <Plus onPress={onClickHideOrShowModal} />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default NavigateToRecent;

const styles = StyleSheet.create({});
