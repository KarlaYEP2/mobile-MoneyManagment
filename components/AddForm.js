import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addNewExpense } from "../store/expenses";
import Expenses from "../models/expenses";

const AddForm = ({ modalInvisible }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch(); // redux dispatch

  const submitHandler = () => {
    if (name.trim() === "" || amount.trim() === "") {
      Alert.alert("Invalid Input", "Please check your input values");
      return;
    } // checks if the input is emtpy or not

    if (isNaN(amount) || parseInt(amount) === 0) {
      Alert.alert("Invalid Input", "Please check your input values");
      return;
    } //check if the input is invalid

    const newExpense = new Expenses( // Returns a new object based on the submitted input defined in the expenses.js model
      new Date().getTime().toString(), // Unique ID based on timestamp
      name,
      +new Date(),
      amount
    );

    // Change redux to plain object in order to avoid warnings
    dispatch(addNewExpense(newExpense.toPlainObject()));

    // Clear inputs after submission
    setName("");
    setAmount("");
    // Close Model
    modalInvisible();
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Item/Service Bought"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={submitHandler} />
    </View>
  );
};

export default AddForm;

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
