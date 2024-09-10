import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const Edit = ({ name, amount }) => {
  const [editName, setEditName] = useState(name);
  const [editAmount, setEditAmount] = useState(amount);
  console.log(name);
  const submitHandler = () => {
    // Handle the submit logic here
    console.log("Expense edited:", { editName, editAmount });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Item/Service Bought"
        value={editName}
        onChangeText={setEditName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={editAmount}
        onChangeText={setEditAmount}
        keyboardType="numeric"
      />
      <Button title="Edit Expense" onPress={submitHandler} />
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
