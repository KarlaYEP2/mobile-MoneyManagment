import { Modal, Text, Button } from "react-native";
import ListItem from "./ListItem";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete from "./editModalComponent/Delete";
import Edit from "./editModalComponent/Edit";
import { removeExpense } from "../store/expenses";

const FullExpensesList = ({ item, selectedId, setSelectedId }) => {
  const [showModal, setShowModal] = useState(false);
  // Changes colour based on the listing the user pressed on
  const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  const color = item.id === selectedId ? "white" : "black";

  const expenses = useSelector((state) => state.expenses);
  const filteredExpense = useMemo(() => {
    return expenses.find((expense) => expense.id === item.id);
  }, [expenses, item.id]);

  const dispatch = useDispatch(); // redux dispatch

  const onClickEditHandler = () => {
    setShowModal(true);
    setSelectedId(item.id);
    console.log(filteredExpense);
  };

  const deleteItem = () => {
    console.log(selectedId);
    dispatch(removeExpense(selectedId));
    setShowModal(false); // Close modal after deletion
  };

  return (
    <>
      <Modal visible={showModal}>
        <Delete onPress={deleteItem} />
        <Edit name={filteredExpense.title} amount={filteredExpense.money} />
        <Text>Edit</Text>
        <Button onPress={() => setShowModal(false)} title="Back" />
      </Modal>
      <ListItem
        item={item}
        onPress={onClickEditHandler}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    </>
  );
};

export default FullExpensesList;
